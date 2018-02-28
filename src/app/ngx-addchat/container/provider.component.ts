import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  @Input() phoneNumber?: string

  public showFbiFrame = false;

  constructor() { }

  ngOnInit() {
  }
}
