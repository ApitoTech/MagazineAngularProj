import { StatusbarComponent } from './statusbar/statusbar.component';
import { AdminComponent } from './admin/admin.component';
import { UnionComponent } from './union/union.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {OfflineSubscriptionComponent} from './offline-subscription/offline-subscription.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SocietyregistrationComponent} from './societyregistration/societyregistration.component';
import {ExistingSubscriberComponent} from './existing-subscriber/existing-subscriber.component';
import {UserDetailsComponent} from './super-admin/user-details/user-details.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "subscription", component: SubscriptionComponent},
  {path: "union", component: UnionComponent},
  {path: "admin", component: AdminComponent},
  {path: "posts", component: StatusbarComponent},
  {path: "personaldetails",component: PersonalDetailsComponent},
  {path: "offlinesubscription",component: OfflineSubscriptionComponent},
  {path: "dashboard",component: DashboardComponent},
  {path: "societyregistration",component: SocietyregistrationComponent},
  {path: "existingSubscriber",component: ExistingSubscriberComponent},
  {path: "userDetailsComponent",component: UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
