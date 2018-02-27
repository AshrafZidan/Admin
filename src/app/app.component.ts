import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

toggleSideBar: boolean;
  constructor() {
  }

  ngOnInit() {
    document.getElementById("profile").addEventListener('click', () => {
      // console.log(this.toggleSideBar);
      if (this.toggleSideBar && document.body.classList.contains("Wrapper")) {
        document.body.classList.toggle("Wrapper");
        document.getElementById('sidebar').classList.toggle('opens');
        this.toggleSideBar = false;

      }
    })
  }

    getVlaue(ev) {
    // console.log(ev);
    this.toggleSideBar = ev;
  }

}
