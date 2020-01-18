import {Component, Inject, OnInit} from '@angular/core';
import {LivingCenter} from '../../models/living-center.model';

@Component({
  selector: 'app-living-center-list',
  templateUrl: './living-center-list.component.html',
  styleUrls: ['./living-center-list.component.scss']
})
export class LivingCenterListComponent implements OnInit {

  livingCenters: LivingCenter[];
  constructor(@Inject('data') private data ) { }

  ngOnInit() {
    this.getLivingCenterList();
  }

  private getLivingCenterList(): void {
    this.livingCenters = this.data.getLivingCenterList();
    console.log('..', this.livingCenters);
  }

}
