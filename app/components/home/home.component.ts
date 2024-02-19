import { Component, OnDestroy, OnInit } from '@angular/core';
import { DonutApiService } from '../../services/donut-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Donut} from '../../models/donut';
import { Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  routeSubscription!: Subscription;
  querySubscription!: Subscription;
  id: number = 0;
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;
  name: string | null = null
  donuts$ = this.donutApi.getDonuts()

  constructor(private activatedRoute: ActivatedRoute, private donutApi: DonutApiService) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    this.querySubscription = this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams['name']) {
        this.name = queryParams['name'];
      }
    })
  }

  ngOnDestroy(): void {

    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }



}
