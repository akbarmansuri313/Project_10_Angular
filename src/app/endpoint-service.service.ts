import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor() { }

    public SERVER_URL = "http://localhost:8080";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public ACTIVITY = this.SERVER_URL + "/Activity";
 public NOTIFICATION = this.SERVER_URL + "/Notification";
  public DEPARTMENT = this.SERVER_URL + "/Department";
   public APPOINTMENT = this.SERVER_URL + "/Appointment";
    public JASPER = this.SERVER_URL + "/Jasper";
     public PROMOTION = this.SERVER_URL + "/Promotion";
}
