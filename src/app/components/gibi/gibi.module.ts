import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GibiRoutingModule } from './gibi-routing.module';
import { FormsModule } from '@angular/forms';
import { GibiCreateComponent } from './create/gibi-create.component';
import { GibiIndexComponent } from './index/gibi-index.component';
import { GibiEditComponent } from './edit/gibi-edit.component';


@NgModule({
  declarations: [
    GibiCreateComponent,
    GibiIndexComponent,
    GibiEditComponent
  ],
  imports: [
    CommonModule,
    GibiRoutingModule,
    FormsModule
  ]
})
export class GibiModule { }
