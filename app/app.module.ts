import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth-guard.guard';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', canActivate: [AuthGuard], component: LogoutComponent },
  {
    path: '', canActivate: [AuthGuard], component: HomeComponent,
    children: [
      { path: '', canActivate: [AuthGuard], component: SalesComponent },
      { path: 'sales', canActivate: [AuthGuard], component: SalesComponent },
      { path: 'projects', canActivate: [AuthGuard], component: ProjectsComponent },
    ]
  },
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [ 
    AppComponent, 
    SalesComponent,
    ProjectsComponent,
    HomeComponent,
    LoginComponent, 
    LogoutComponent 
  ],
  providers: [AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
