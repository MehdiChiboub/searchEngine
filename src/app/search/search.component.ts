import { SearchService } from './../shared/services/search.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isOpened: boolean = false;
  image: string;
  file: File;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onCloseSideNav(e) {
    if (e.target.classList.contains("sidenav-container")) {
      this.isOpened = false;
      document.body.className = "";
    }
  }

  onSideNavToggle() {
    this.isOpened = !this.isOpened;
    document.body.className = "overflow-hidden-mobile";
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.file);
    console.log(formData);
    this.searchService
    .uploadFile(formData)
    .subscribe((res) => {
      console.log(res);
    });
  }

   // FileUpload
   readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    const file: File = event.target.files[0];
    console.log(event.target.value.split('.').pop());

    var reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file);
    this.file = file;
  }

}
