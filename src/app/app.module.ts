import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UnionComponent } from './union/union.component';
import { AdminComponent } from './admin/admin.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OfflineSubscriptionComponent } from './offline-subscription/offline-subscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DataTablesModule} from 'angular-datatables';
import { SocietyregistrationComponent } from './societyregistration/societyregistration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ExistingSubscriberComponent } from './existing-subscriber/existing-subscriber.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { UserDetailsComponent } from './super-admin/user-details/user-details.component';
import { UserScreenComponent } from './super-admin/user-screen/user-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionComponent,
    UnionComponent,
    AdminComponent,
    StatusbarComponent,
    PersonalDetailsComponent,
    OfflineSubscriptionComponent,
    DashboardComponent,
    SocietyregistrationComponent,
    PopUpComponent,
    ExistingSubscriberComponent,
    SuperAdminComponent,
    UserDetailsComponent,
    UserScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
