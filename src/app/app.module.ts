import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PullZoneListComponent } from './pull-zone/pull-zone-list/pull-zone-list.component';
import { PullZoneDetailsComponent } from './pull-zone/pull-zone-details/pull-zone-details.component';
import { PullZoneAddComponent } from './pull-zone/pull-zone-add/pull-zone-add.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoneTypePipe } from './pull-zone/pipes/zone-type.pipe';
import { PullZoneGeoZoneComponent } from './pull-zone/pull-zone-details/pull-zone-geo-zone.component';
import { MegaBytePipe } from './pull-zone/pipes/mega-byte.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PullZoneListComponent,
    PullZoneDetailsComponent,
    PullZoneAddComponent,
    HomeComponent,
    NotFoundComponent,
    ZoneTypePipe,
    PullZoneGeoZoneComponent,
    MegaBytePipe,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
