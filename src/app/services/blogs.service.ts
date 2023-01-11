import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environments';
import { Blog } from '../components/interfaces/blog.interface';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  getListado() {
    return this.http.get(`${environment.baseAPI}/Blog`)
  }

  getDetalleBLog(id:number) {
    return this.http.get(`${environment.baseAPI}/Blog/Obtener/${id}`)
  }
}
