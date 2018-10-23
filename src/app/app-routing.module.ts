import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent }  from './welcome/welcome.component';
import { StoryDisplayComponent }  from './story-display/story-display.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
  path: 'story/:page',
  component: StoryDisplayComponent
}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
