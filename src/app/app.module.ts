import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadernoCreateComponent } from './components/caderno/create/caderno-create.component';
import { DoceCreateComponent } from './components/doce/create/doce-create.component';
import { CadernoIndexComponent } from './components/caderno/index/caderno-index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadernoEditComponent } from './components/caderno/edit/caderno-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CadernoCreateComponent,
    DoceCreateComponent,
    CadernoIndexComponent,
    CadernoEditComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//constructor(private request: HttpClient) { //Injeção de Dependência. para requisitar a API. precisso do (HttpClientModule)
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
