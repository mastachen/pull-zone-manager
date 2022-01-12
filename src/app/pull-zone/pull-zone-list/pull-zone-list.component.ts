import { PullZone } from './../models/pull-zone.model';
import { PullZoneService } from './../../services/pull-zone/pull-zone.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'pull-zone-list',
  templateUrl: './pull-zone-list.component.html',
  styleUrls: ['./pull-zone-list.component.scss'],
})
export class PullZoneListComponent implements AfterViewInit {
  pullZones: PullZone[] = [];
  // table columns for display with mat-table
  displayedColumns: string[] = ['Name', 'OriginUrl', 'Type'];
  dataSource: MatTableDataSource<PullZone>;

  // use @ViewChild decorator to access template reference variable inside the component
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pullZoneService: PullZoneService) {}

  // get pull zones
  getPullZones(): void {
    this.pullZoneService.getPullZones().subscribe((pullZones) => {
      this.pullZones = pullZones;
      this.dataSource = new MatTableDataSource(this.pullZones);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // ngAfterViewInit is called after a component's view, and its children's views, are created
  ngAfterViewInit() {
    this.getPullZones();
  }
}