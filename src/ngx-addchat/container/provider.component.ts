import { animation, trigger, transition, animate, state, style, keyframes } from '@angular/animations'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'chat-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
  animations: [
    trigger('providerAnimate', [
      transition(":enter", animate("300ms ease-in-out", keyframes([
        style({transform: "translateX(20px)", opacity: 0, offset: 0}),
        style({transform: "translateX(0)", opacity: 1, offset: 1}),
      ]))),
      transition(":leave", animate("300ms ease-in-out", keyframes([
        style({transform: "translateX(0)", opacity: 1, offset: 0}),
        style({transform: "translateX(20px)", opacity: 0, offset: 1}),
      ])))
    ])
  ]
})
export class ProviderComponent implements OnInit {

  @Input() whatsapp: string

  @Input() fbPageName: string

  @Output() onClosed = new EventEmitter<boolean>()

  public fbIframeUrl: string

  public showFbiFrame = false;

  public safeUrl: SafeResourceUrl

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.fbPageName) {
      this.fbIframeUrl = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${this.fbPageName}%2F&tabs=messages&width=300&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fbIframeUrl)
    }
  }
}
