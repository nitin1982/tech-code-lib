import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './security/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './security/components/user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    UserRegistrationComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, FormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
