import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'chat-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  @Input() phoneNumber?: string

  @Input() fbPageName?: string

  public fbIframeUrl?: string

  public showFbiFrame = false;

  public safeUrl: SafeResourceUrl

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.fbPageName)
    if (this.fbPageName) {
      this.fbIframeUrl = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${this.fbPageName}%2F&tabs=messages&width=300&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fbIframeUrl)
    }
    console.log(this.fbIframeUrl)
  }
}
