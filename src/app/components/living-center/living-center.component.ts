import { Component, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import {LivingCenter} from '../../models/living-center.model';
import marker from '../../../assets/images/location_marker.png';
@Component({
  selector: 'app-living-center',
  templateUrl: './living-center.component.html',
  styleUrls: ['./living-center.component.scss']
})
export class LivingCenterComponent implements OnInit {
  @Input() center: LivingCenter;
  zoom: number = 6;
  marker: any = {
    url: marker,
    scaledSize: {
      width: 35,
      height: 35
    }};

  constructor(@Inject('data') private data ) { }

  ngOnInit() {


  }

}
