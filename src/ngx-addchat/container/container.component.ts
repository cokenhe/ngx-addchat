import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'ngx-addchat',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() whatsapp?: string

  @Input() fbPageName?: string

  public mainBtnActive = true;

  constructor() { }

  ngOnInit() {
  }

}
