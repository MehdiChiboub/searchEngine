import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isOpened: boolean = false;
  constructor() { }

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

}
