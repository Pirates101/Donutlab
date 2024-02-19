import { Component } from '@angular/core';
import { Donut } from '../../models/donut';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DonutApiService } from '../../services/donut-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor (private getDonutService: DonutApiService, private route: ActivatedRoute){ }

  id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  donut$ = this.getDonutService.getDonutInfo(this.id);
}
