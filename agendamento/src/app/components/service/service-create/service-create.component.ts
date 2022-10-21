import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  service: Service = {
    name: '',
    price: null,
    description: ''
  };

  constructor(private serviceService: ServiceService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createService(): void {
    this.serviceService.create(this.service).subscribe(() => {
      this.serviceService.showMessage('Serviço criado!');
      this.router.navigate(['/servicos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/servicos'])
  }
}
