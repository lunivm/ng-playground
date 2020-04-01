import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-nested-route',
  templateUrl: './nested-route.component.html',
  styleUrls: ['./nested-route.component.scss']
})
export class NestedRouteComponent implements OnInit {

  constructor() {
    console.log('NestedRouteComponent created');
  }

  ngOnInit(): void {
  }

}
