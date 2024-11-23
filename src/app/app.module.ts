import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShlokSelectorComponent } from './shlok-selector/shlok-selector.component';
import { AboutComponent } from './about/about.component';
import { PoetComponent } from './poet/poet.component';
import { PasaydanComponent } from './pasaydan/pasaydan.component';
import { SettingsComponent } from './settings/settings.component';
import { MarathiNumberPipe } from './marathinumber.pipe';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    NgCircleProgressModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    NgCircleProgressModule.forRoot()
  ],
  exports: [
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    ShlokSelectorComponent,
    AboutComponent,
    PoetComponent,
    PasaydanComponent,
    MarathiNumberPipe,
    SettingsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ]
})
export class AppModule { }
