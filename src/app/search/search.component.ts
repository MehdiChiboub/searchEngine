import { SearchService } from './../shared/services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isOpened = false;
  image: string;
  images = [];
  file: File;


  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  // Send the uploaded image to the server and catch resulting images
  onSubmit(): void {
    const formData = new FormData();
    formData.append('image', this.file);
    this.searchService
      .uploadFile(formData)
      .then((res: any) => {
        this.images = res.split('/');
        console.log(this.images);
      })
      .catch((err: any) => {
        console.log(err);
      });
    this.isOpened = ! this.isOpened;
  }

   // FileUpload
   readUrl(event: any): void {
    if (event.target.files.length === 0) {
      return;
    }
    // Image upload validation
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.image = reader.result as string;
    };
    reader.readAsDataURL(file);
    this.file = file;
  }

}
