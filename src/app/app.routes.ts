import { Routes } from '@angular/router';
import { ErrorPage } from './pages/error/error.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  {
    path: 'error',
    loadComponent: () =>
      import('./pages/error/error.page').then((m) => m.ErrorPage),
  },

  {
    path: 'welcome-screen',
    loadComponent: () =>
      import('./pages/welcome-screen/welcome-screen.page').then(
        (m) => m.WelcomeScreenPage
      ),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/error/error.page').then((p) => p.ErrorPage),
  },

];
