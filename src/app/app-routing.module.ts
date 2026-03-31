import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TimetableComponent } from './timetable/timetable.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { CourseListComponent } from './course/course-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityListComponent } from './activity/activity-list.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification/notification-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list.component';
import { ChangePasswordComponent } from './user/change-password.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ForgetpasswordComponent } from './login/forgetpassword.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list.component';
import { JasperComponent } from './jasper/jasper.component';
import { MarksheetMeritListComponent } from './marksheet/marksheet-merit-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './promotion/promotion-list.component';


const routes: Routes = [
{
  path : '',
  pathMatch: 'full',
  redirectTo : 'welcome'
},

{
  path : 'welcome',
  component : WelcomeComponent
},

{
path : 'login',
component : LoginComponent
},

{
  path : 'signup',
  component : SignUpComponent
},

{
  path : 'footer',
  component : FooterComponent
},

{
  path: 'dashboard',
  component : DashboardComponent
},

 {
    path: 'user',
    component: UserComponent
  },

 {
    path: 'user/:id',
    component: UserComponent
  },

  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'roleList',
    component: RoleListComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'collegeList',
    component: CollegeListComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subjectList',
    component: SubjectListComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'studentList',
    component: StudentListComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'courseList',
    component: CourseListComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },

   {
    path: 'faculty/:id',
    component: FacultyComponent
  },

 {
    path: 'facultyList',
    component: FacultyListComponent
  },

  {
    path: 'marksheet',
    component: MarksheetComponent
  },

   {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },

   {
    path: 'marksheetList',
    component: MarksheetListComponent
  },

   {
    path: 'marksheetmeritList',
    component: MarksheetMeritListComponent
  },
  //  {
  //   path: 'getmarksheet',
  //   component: GetmarksheetComponent
  // },

  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'timetableList',
    component: TimetableListComponent
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },

   {
    path: 'changepassword',
    component: ChangePasswordComponent
  },

   {
    path: 'myprofile',
    component: MyprofileComponent
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },

  {
    path : 'forgetpassword',
    component : ForgetpasswordComponent
  },

  {
    path : 'jasper',
    component : JasperComponent
  },

  {
    path : 'activity',
    component : ActivityComponent
  },
   {
    path : 'activity/:id',
    component : ActivityComponent
  },
   {
    path : 'activityList',
    component : ActivityListComponent
  },

  {
    path : 'notification',
    component : NotificationComponent
  },
   {
    path : 'notification/:id',
    component : NotificationComponent
  },
   {
    path : 'notificationList',
    component : NotificationListComponent
  },

   {
    path : 'department',
    component : DepartmentComponent
  },
   {
    path : 'department/:id',
    component : DepartmentComponent
  },
   {
    path : 'departmentList',
    component : DepartmentListComponent
  },

   {
    path : 'appointment',
    component : AppointmentComponent
  },
   {
    path : 'appointment/:id',
    component : AppointmentComponent
  },
   {
    path : 'appointmentList',
    component : AppointmentListComponent
  },
   {
    path : 'promotion',
    component : PromotionComponent
  },
   {
    path : 'promotion/:id',
    component : PromotionComponent
  },
   {
    path : 'promotionList',
    component : PromotionListComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
