import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';


const routes: Routes = [
  { path: 'user/list', component: ListComponent },
  { path: 'user/detail/:id', component: DetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
