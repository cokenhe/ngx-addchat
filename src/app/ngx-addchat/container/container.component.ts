import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'chat-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() phoneNumber?: string

  public mainBtnActive = true;

  constructor() { }

  ngOnInit() {
  }

}
