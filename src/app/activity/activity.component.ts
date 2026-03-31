import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent extends BaseCtl{

  constructor(public locator : ServiceLocatorService, route : ActivatedRoute){
    super(locator.endpoints.ACTIVITY,locator,route);
  }

}
