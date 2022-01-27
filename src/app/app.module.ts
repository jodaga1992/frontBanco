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
import { EditarComponent } from './Vistas/Clientes/editar/editar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditarClienteComponent } from './Vistas/Clientes/editar-cliente/editar-cliente.component';
import { InactivarClienteComponent } from './Vistas/Clientes/inactivar-cliente/inactivar-cliente.component';
import { ActivarClienteComponent } from './Vistas/Clientes/activar-cliente/activar-cliente.component';
import { NuevaCuentaComponent } from './Vistas/Cuentas/nueva-cuenta/nueva-cuenta.component';
import { NuevoRetiroComponent } from './Vistas/Transacciones/nuevo-retiro/nuevo-retiro.component';
import { NuevaConsignacionComponent } from './Vistas/Transacciones/nueva-consignacion/nueva-consignacion.component';
import { NuevaTransferenciaComponent } from './Vistas/Transacciones/nueva-transferencia/nueva-transferencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    CancelarCuentaComponent,
    EditarComponent,
    EditarClienteComponent,
    InactivarClienteComponent,
    ActivarClienteComponent,
    NuevaCuentaComponent,
    NuevoRetiroComponent,
    NuevaConsignacionComponent,
    NuevaTransferenciaComponent,
    //HeaderComponent,
    //NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
