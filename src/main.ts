import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,{providers:[importProvidersFrom(RouterModule.forRoot(appRoutes))]});
