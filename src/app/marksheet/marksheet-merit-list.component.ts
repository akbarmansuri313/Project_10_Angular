import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-marksheet-merit-list',
  templateUrl: './marksheet-merit-list.component.html',
  styleUrls: ['./marksheet-merit-list.component.css']
})
export class MarksheetMeritListComponent extends BaseCtl{

     constructor( public locator:ServiceLocatorService,route:ActivatedRoute,private httpservice :HttpServiceService){


    super(locator.endpoints.MARKSHEET,locator,route);
  }

  override ngOnInit(): void {
      this.getMeritList();
  }

  getMeritList(){
    var _self = this;
  
    this.httpservice.get("http://localhost:8080/Marksheet/meritlist",function (res:any){
      
      if(res.success){
        _self.form.list = res.result.list;
        if(_self.form.list.length == 0){
          _self.form.message = "No record found";
          _self.form.error = true;
        }
        console.log("List Size",_self.form.list.length );
      }else{
        _self.form.error = false;
        _self.form.message = res.result.message;
      }
      console.log('FORM', _self.form);
    });
  }
 goToLink() {
   window.open('/jasper', '_blank');
 }
 }
