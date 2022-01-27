import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Core/footer/footer.component';
import { HeaderComponent } from './Core/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { ListaComponent } from './Customers/Pages/Cuentas/lista/lista.component';
import { MovimientosComponent } from './Customers/Pages/Cuentas/movimientos/movimientos.component';
import { InactivarComponent } from './Customers/Pages/Cuentas/inactivar/inactivar.component';
import { ActivarCuentaComponent } from './Customers/Pages/Cuentas/activar-cuenta/activar-cuenta.component';
import { CancelarCuentaComponent } from './Customers/Pages/Cuentas/cancelar-cuenta/cancelar-cuenta.component';
import { EditarComponent } from './Customers/Pages/Clientes/editar/editar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InactivarClienteComponent } from './Customers/Pages/Clientes/inactivar-cliente/inactivar-cliente.component';
import { ActivarClienteComponent } from './Customers/Pages/Clientes/activar-cliente/activar-cliente.component';
import { NuevaCuentaComponent } from './Customers/Pages/Cuentas/nueva-cuenta/nueva-cuenta.component';
import { NuevoRetiroComponent } from './Customers/Pages/Transacciones/nuevo-retiro/nuevo-retiro.component';
import { NuevaConsignacionComponent } from './Customers/Pages/Transacciones/nueva-consignacion/nueva-consignacion.component';
import { NuevaTransferenciaComponent } from './Customers/Pages/Transacciones/nueva-transferencia/nueva-transferencia.component';
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
