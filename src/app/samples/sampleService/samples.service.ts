import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplesService {
  apiUrl = 'https://cascavelsampleuploder.liara.run/sample/api/samplelist';
  constructor(private http:HttpClient) { }
  getSamples():Observable<any>{
   return this.http.get<any>(this.apiUrl);

  }
}
