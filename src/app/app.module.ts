import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DigitalStrategyComponent } from './digital-strategy/digital-strategy.component';
import { DesignGuidesComponent } from './design-guides/design-guides.component';
import { GithubSourceComponent } from './github-source/github-source.component';
import { CollaboratePageComponent } from './collaborate-page/collaborate-page.component';
import { EngagePageComponent } from './engage-page/engage-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DigitalStrategyComponent,
    DesignGuidesComponent,
    GithubSourceComponent,
    CollaboratePageComponent,
    EngagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
