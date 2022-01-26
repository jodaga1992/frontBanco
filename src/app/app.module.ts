import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Plantillas/footer/footer.component';
import { HeaderComponent } from './Plantillas/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { ListaComponent } from './Vistas/Cuentas/lista/lista.component';
import { MovimientosComponent } from './Vistas/Cuentas/movimientos/movimientos.component';
import { InactivarComponent } from './Vistas/Cuentas/inactivar/inactivar.component';
import { ActivarCuentaComponent } from './Vistas/Cuentas/activar-cuenta/activar-cuenta.component';
import { CancelarCuentaComponent } from './Vistas/Cuentas/cancelar-cuenta/cancelar-cuenta.component';
//import { HeaderComponent } from './Plantillas/header/header.component';
//import { NuevoComponent } from './Vistas/Clientes/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    HeaderComponent,
    ListaComponent,
    MovimientosComponent,
    InactivarComponent,
    ActivarCuentaComponent,
    CancelarCuentaComponent
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
