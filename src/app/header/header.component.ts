import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }
  onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }
  onFetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  onLogout(): void {
    this.authService.logout();
  }
}
