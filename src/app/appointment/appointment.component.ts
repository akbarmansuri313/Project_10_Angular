import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent extends BaseCtl {

  constructor(public locator : ServiceLocatorService,  route : ActivatedRoute){
    super(locator.endpoints.APPOINTMENT, locator,route)
  }

}
