import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  uploadFile(img: FormData) {
    return this.http.post(`http://127.0.0.1:5000/uploader`, img);
  }

}
