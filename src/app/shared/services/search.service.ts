import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  uploadFile(img: FormData): any {
    return this.http
      .post(`http://127.0.0.1:5000/uploader`, img, {responseType: 'text'})
      .toPromise();
  }

  uploadNormalizeFile(img: FormData): any {
    return this.http
      .post(`http://127.0.0.1:5000/uploader-normalize`, img, {responseType: 'text'})
      .toPromise();
  }

}
