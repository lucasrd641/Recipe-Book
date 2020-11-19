import { Component, Input, OnInit, Output } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
