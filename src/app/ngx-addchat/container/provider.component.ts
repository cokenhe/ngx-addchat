import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss', '../../../../node_modules/ionicons/css/ionicons.css']
})
export class ProviderComponent implements OnInit {

  public showFbiFrame = false;

  constructor() { }

  ngOnInit() {
  }
}
