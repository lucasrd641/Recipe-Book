import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  viewName = '';

  onChangeViewFired(viewName: string){
    this.viewName = viewName;
  }
}
