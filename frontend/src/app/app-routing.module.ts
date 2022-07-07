import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReduxDemoComponent } from './redux-demo/redux-demo.component';

const routes: Routes = [
  // right here
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'redux',
    loadChildren: () =>
      import('./redux-demo/redux-demo.module').then((m) => m.ReduxDemoModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
  // added here.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
