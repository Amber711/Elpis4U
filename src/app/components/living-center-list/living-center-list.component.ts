import {Component, Inject, OnInit} from '@angular/core';
import {LivingCenter} from '../../models/living-center.model';

@Component({
  selector: 'app-living-center-list',
  templateUrl: './living-center-list.component.html',
  styleUrls: ['./living-center-list.component.scss']
})
export class LivingCenterListComponent implements OnInit {

  livingCenters: LivingCenter[];
  filterArr: string[] = [];
  filters: any = {
    food_available: false,
    wardrobe_available: false,
    bed_num: false,
    shower_num: false
  };
  constructor(@Inject('data') private data ) { }

  ngOnInit() {
    this.getLivingCenterList();
  }

  handleFilterChange(e, item) {
    this.filters[item] = e.checked;
    const newArr = [];
    const keys = Object.keys(this.filters);
    for (let i = 0; i < keys.length - 1; i++) {
      if (this.filters[keys[i]]) {
        newArr.push(keys[i]);
      }
    }
    console.log('newArr: ', newArr)
    this.filterArr = newArr;
  }

  private getLivingCenterList(): any {
    this.data.getLivingCenterList().then(res => {
      this.livingCenters = res;
    });
  }

}
