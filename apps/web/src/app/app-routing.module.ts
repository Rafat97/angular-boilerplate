import { NgModule } from '@angular/core';
import { LoadChildrenCallback, RouterModule, Routes } from '@angular/router';

const homeModule: LoadChildrenCallback = () => import('./pages/home/home.module').then((m) => m.HomeModule);

const routes: Routes = [
  {
    path: '',
    loadChildren: homeModule,
  },
  {
    path: 'home',
    loadChildren: homeModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
