import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Service } from '../service.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css'],
})
export class ServiceUpdateComponent implements OnInit {

  service?: Service;

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== undefined && id !== null)
      this.serviceService.readById(id).subscribe(service => {
        this.service = service
      });
  }

  updateService(): void {
    if (this.service !== undefined && this.service !== null)
      this.serviceService.update(this.service).subscribe(() => {
        this.serviceService.showMessage('Produto atualizado com sucesso!')
        this.router.navigate(["/servicos"])
      });

  }

  cancel(): void {
    this.router.navigate(['/servicos']);
  }
}

