import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: number,
  name: string,
  type: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  public get(url:string){
    return this.http.get(url); // GET
  }

  public post(url:string, body: any){
    return this.http.post(url,body); // POST
  }

  public delete(url:string){
    return this.http.delete(url); // DELTE
  }

  public put(url:string, body: any){
    return this.http.put(url,body); // PUT
  }

}
