import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changeViewFired = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onSelect(viewName: string){
    this.changeViewFired.emit(viewName);
  }
}
