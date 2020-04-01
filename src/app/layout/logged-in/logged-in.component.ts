import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor() {
    console.log('LoggedInComponent created');
  }

  ngOnInit(): void {
  }

}
