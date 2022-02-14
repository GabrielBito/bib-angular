import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadernoCreateComponent } from './components/caderno/create/caderno-create.component';
import { CadernoEditComponent } from './components/caderno/edit/caderno-edit.component';
import { CadernoIndexComponent } from './components/caderno/index/caderno-index.component';

const routes: Routes = [
  { path: 'caderno-index', component: CadernoIndexComponent },
  { path: 'caderno-create', component: CadernoCreateComponent },
  { path: 'caderno-edit', component: CadernoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
