import { Router, ActivatedRoute } from '@angular/router';
import { Service } from './../service.model';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.css']
})
export class ServiceDeleteComponent implements OnInit {

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

  deleteService(): void {
    if (this.service?.id !== undefined && this.service?.id !== null)
      this.serviceService.delete(this.service.id).subscribe(() => {
        this.serviceService.showMessage('Produto excluido com sucesso!')
        this.router.navigate(["/servicos"])
      });

  }

  cancel(): void {
    this.router.navigate(['/servicos']);
  }
}
