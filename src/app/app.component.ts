import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  viewName = 'recipes';

  // tslint:disable-next-line: typedef
  onChangeViewFired(viewName: string) {
    this.viewName = viewName;
  }
}
