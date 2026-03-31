import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent extends BaseListCtl{

  constructor(public locator : ServiceLocatorService, route : ActivatedRoute){
    super(locator.endpoints.DEPARTMENT, locator, route)
  }

}
