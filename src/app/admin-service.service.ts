import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  public url = environment.url ;
  constructor( private httpClient: HttpClient, ) { }
  displayLead() {
    return this.httpClient.get(this.url + '/api/test/testapi');

  }
  delete(id) {
    return this.httpClient.get(this.url + '/api/test/deleteapi/' + id);
  }
  storedata(data) {
   return this.httpClient.post(this.url + '/api/storeapi', data);
  }
}
