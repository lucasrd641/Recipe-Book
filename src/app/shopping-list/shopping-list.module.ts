import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './shopping-list.component';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
  imports: [
    ShoppingListRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [],
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  providers: [],
})
export class ShoppingListModule {}
