import { Component, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import {LivingCenter} from '../../models/living-center.model';
@Component({
  selector: 'app-living-center',
  templateUrl: './living-center.component.html',
  styleUrls: ['./living-center.component.scss']
})
export class LivingCenterComponent implements OnInit {
  @Input() center: LivingCenter;
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  constructor(@Inject('data') private data ) { }

  ngOnInit() {


  }

}
