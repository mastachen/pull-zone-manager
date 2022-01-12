import { NotFoundComponent } from './not-found/not-found.component';
import { PullZoneListComponent } from './pull-zone/pull-zone-list/pull-zone-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PullZoneDetailsComponent } from './pull-zone/pull-zone-details/pull-zone-details.component';
import { PullZoneAddComponent } from './pull-zone/pull-zone-add/pull-zone-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pull-zone',
    children: [
      { path: 'list', component: PullZoneListComponent },
      { path: 'add', component: PullZoneAddComponent },
      { path: ':id', component: PullZoneDetailsComponent }
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  // instantiate an instance Router class globally
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
