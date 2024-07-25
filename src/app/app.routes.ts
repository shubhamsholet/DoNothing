import { Routes } from '@angular/router';
import { ErrorPage } from './pages/error/error.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  
  { path: 'home', component:HomePage  },
  {
    path: 'error',
    loadComponent: () => import('./pages/error/error.page').then( m => m.ErrorPage)
  },
  { path: 'pages/home', component: HomePage },
 
     {
    path: 'welcome-screen',
    loadComponent: () => import('./pages/welcome-screen/welcome-screen.page').then( m => m.WelcomeScreenPage)
  },
  {
    path: 'user-details',
    loadComponent: () => import('./pages/user-details/user-details.page').then( m => m.UserDetailsPage)
  },
  {
    path: '',
    redirectTo: 'pages/HomePage',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'pages/home' },
  

];
