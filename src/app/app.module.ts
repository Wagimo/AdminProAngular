import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './login/registers.component'

//modulos
import { PagesModule } from  './pages/pages.module'
//rutas
import { APP_ROUTES  } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    RegistersComponent    
  ],
  imports: [
    BrowserModule,    
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
