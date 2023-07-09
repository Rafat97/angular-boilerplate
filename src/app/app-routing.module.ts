import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const HomeModule = () => import('./pages/home/home.module').then((m) => m.HomeModule);

const routes: Routes = [
  {
    path: '',
    loadChildren: HomeModule,
  },
  {
    path: 'home',
    loadChildren: HomeModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
