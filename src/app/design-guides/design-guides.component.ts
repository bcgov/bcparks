import { Component } from '@angular/core';

@Component({
  selector: 'app-design-guides',
  templateUrl: './design-guides.component.html',
  styleUrls: ['./design-guides.component.scss']
})
export class DesignGuidesComponent {

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
