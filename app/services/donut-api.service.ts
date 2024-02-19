import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Donut } from '../models/donut';
import { DonutInfo } from '../models/donut-info';

@Injectable({
  providedIn: 'root'
})
export class DonutApiService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'https://grandcircusco.github.io/demo-apis'

  getDonuts(): Observable<Donut[]> {
    return this.httpClient.get<{results:Donut[]}>(`${this.baseURL}/donuts.json`).pipe(map((response: { results: Donut[] }) => response.results));
  }

  getDonutInfo(id: number): Observable<DonutInfo> {
    return this.httpClient.get<DonutInfo>(`${this.baseURL}/donuts/${id}.json`);
  }
}
