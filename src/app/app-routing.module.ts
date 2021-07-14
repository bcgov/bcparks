import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratePageComponent } from './collaborate-page/collaborate-page.component';
import { DesignGuidesComponent } from './design-guides/design-guides.component';
import { DigitalStrategyComponent } from './digital-strategy/digital-strategy.component';
import { EngagePageComponent } from './engage-page/engage-page.component';
import { GithubSourceComponent } from './github-source/github-source.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'digital-strategy',
    component: DigitalStrategyComponent
  },
  {
    path: 'design-guides',
    component: DesignGuidesComponent
  },
  {
    path: 'projects',
    component: GithubSourceComponent
  },
  {
    path: 'collaborate',
    component: CollaboratePageComponent
  },
  {
    path: 'engage',
    component: EngagePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
