import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent, LandingPageComponent, LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, HttpClientModule],
  exports:[HttpClientModule]
})
export class AuthModule {}
