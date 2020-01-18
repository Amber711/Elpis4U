import { Component, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import {LivingCenter} from '../../models/living-center.model';
@Component({
  selector: 'app-living-center',
  templateUrl: './living-center.component.html',
  styleUrls: ['./living-center.component.scss']
})
export class LivingCenterComponent implements OnInit {
  @Input() center: LivingCenter;
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  //map: google.maps.Map;
  constructor(@Inject('data') private data ) { }

  ngOnInit() {
    // const mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

}
