import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-design-guides',
  templateUrl: './design-guides.component.html',
  styleUrls: ['./design-guides.component.scss']
})
export class DesignGuidesComponent implements OnInit {

  public relativeUrl = '/assets/objects/BC_Parks_Brand_Guidelines_Apr25_2022.pdf';
  public siteUrl = 'https://bcgov.github.io/bcparks';
  public pdfUrl = '.' + this.relativeUrl;

  constructor() { }

  ngOnInit(): void {
    if (environment.production) {
      this.pdfUrl = this.siteUrl + this.relativeUrl;
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
