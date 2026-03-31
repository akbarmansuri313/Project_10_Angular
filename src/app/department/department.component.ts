import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent extends BaseCtl {

  constructor(public locator : ServiceLocatorService, route : ActivatedRoute){
    super(locator.endpoints.DEPARTMENT, locator, route)
  }

}
