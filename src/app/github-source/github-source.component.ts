import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-source',
  templateUrl: './github-source.component.html',
  styleUrls: ['./github-source.component.scss']
})
export class GithubSourceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
