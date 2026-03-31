import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.css']
})
export class TimetableListComponent extends BaseListCtl{

 
  
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.TIMETABLE, locator, route)
  }

}