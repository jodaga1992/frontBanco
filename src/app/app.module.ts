import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Plantillas/footer/footer.component';
import { HeaderComponent } from './Plantillas/header/header.component';
import { HttpClientModule} from '@angular/common/http';
//import { HeaderComponent } from './Plantillas/header/header.component';
//import { NuevoComponent } from './Vistas/Clientes/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    HeaderComponent
    //HeaderComponent,
    //NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
