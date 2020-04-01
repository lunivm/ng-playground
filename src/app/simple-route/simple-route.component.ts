import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-simple-route',
  templateUrl: './simple-route.component.html',
  styleUrls: ['./simple-route.component.scss']
})
export class SimpleRouteComponent implements OnInit {

  constructor() {
    console.log('SimpleRouteComponent created');
  }

  ngOnInit(): void {
  }

}
