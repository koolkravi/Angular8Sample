import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleetmanager',
  templateUrl: './fleetmanager.component.html',
  styleUrls: ['./fleetmanager.component.css']
})
export class FleetmanagerComponent implements OnInit {
  order = '10';
  constructor() { }

  ngOnInit() {
  }

}
