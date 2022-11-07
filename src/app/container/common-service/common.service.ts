import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl : string = "https://shielded-anchorage-15116.herokuapp.com/writers";

  constructor(public http: HttpClient) { }


  login(data): Observable<any> {
    console.log(data);
    return this.http.post('https://9a8f5f69-5e93-4b1c-83ed-cf311522bb3d.mock.pstmn.io/api/token', data)
  }

  // signup(data): Observable<any> {
  //   return this.http.post('http://183.182.84.84/restapi/wp-json/wp/v2/users/register', data)
  // }

  get(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  post(data): Observable<any> {
    return this.http.post(this.apiUrl, data)
  }

  put(id, data): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data)
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
