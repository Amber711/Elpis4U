import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCheckbox, MatCheckboxModule, MatIconModule, MatTabsModule} from '@angular/material';
import { LivingCenterComponent } from './components/living-center/living-center.component';
import { CharitableOrganizationComponent } from './components/charitable-organization/charitable-organization.component';
import { DataService} from './services/data.service';
import { LivingCenterListComponent } from './components/living-center-list/living-center-list.component';
import { AgmCoreModule } from '@agm/core';
import { CenterFilterPipe } from './filter/center-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LivingCenterComponent,
    CharitableOrganizationComponent,
    LivingCenterListComponent,
    CenterFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCFMW3svKE9jxPMJC3F6k-ERn6IHjAPQk',
      // libraries: ["places", "geometry"]
      /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
    })
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
