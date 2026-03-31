import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent extends BaseListCtl {

   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
  
      super(locator.endpoints.ACTIVITY, locator, route)
    }

}
