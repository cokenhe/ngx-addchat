import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'chat-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss', '../../../../node_modules/ionicons/css/ionicons.css']
})
export class ContainerComponent implements OnInit {

  public mainBtnActive = true;

  constructor() { }

  ngOnInit() {
  }

}
