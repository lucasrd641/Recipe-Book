import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AuthRoutingModule],
  exports: [],
  declarations: [AuthComponent],
  providers: [],
})
export class AuthModule {}
