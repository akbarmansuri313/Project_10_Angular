import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent extends BaseListCtl {

  constructor(locator :  ServiceLocatorService, route : ActivatedRoute){
    super(locator.endpoints.STUDENT, locator, route)
  }

}
