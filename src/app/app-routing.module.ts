import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Core/home/home.component';
import {NuevoComponent} from './Customers/Pages/Clientes/nuevo/nuevo.component';
import {ListaComponent} from './Customers/Pages/Cuentas/lista/lista.component';
import {MovimientosComponent} from './Customers/Pages/Cuentas/movimientos/movimientos.component';
import {InactivarComponent} from './Customers/Pages/Cuentas/inactivar/inactivar.component';
import {ActivarCuentaComponent} from './Customers/Pages/Cuentas/activar-cuenta/activar-cuenta.component';
import {CancelarCuentaComponent} from './Customers/Pages/Cuentas/cancelar-cuenta/cancelar-cuenta.component';
import {EditarComponent} from './Customers/Pages/Clientes/editar/editar.component';
import { InactivarClienteComponent } from './Customers/Pages/Clientes/inactivar-cliente/inactivar-cliente.component';
import { ActivarClienteComponent } from './Customers/Pages/Clientes/activar-cliente/activar-cliente.component';
import { NuevaCuentaComponent } from './Customers/Pages/Cuentas/nueva-cuenta/nueva-cuenta.component';
import { NuevoRetiroComponent } from './Customers/Pages/Transacciones/nuevo-retiro/nuevo-retiro.component';
import { NuevaConsignacionComponent } from './Customers/Pages/Transacciones/nueva-consignacion/nueva-consignacion.component';
import { NuevaTransferenciaComponent } from './Customers/Pages/Transacciones/nueva-transferencia/nueva-transferencia.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'NuevoCliente', component:NuevoComponent},
  {path: 'ListaCuentas/:id',component:ListaComponent },
  {path:'MovimientosCuenta/:numero',component:MovimientosComponent},
  {path: 'InactivarCuenta/:numeroCuenta', component:InactivarComponent},
  {path: 'ActivarCuenta/:numeroCuenta', component:ActivarCuentaComponent},
  {path: 'CancelarCuenta/:numeroCuenta', component:CancelarCuentaComponent},
  {path: 'EditarCliente/:id',component:EditarComponent},
  {path: 'InactivarCliente/:id', component:InactivarClienteComponent},
  {path: 'ActivarCliente/:id', component:ActivarClienteComponent},
  {path: 'NuevaCuenta/:id', component:NuevaCuentaComponent},
  {path: 'NuevoRetiro/:numeroCuenta', component:NuevoRetiroComponent},
  {path: 'NuevaConsignacion/:numeroCuenta', component:NuevaConsignacionComponent},
  {path: 'NuevaTransferencia/:numeroCuenta', component:NuevaTransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,NuevoComponent,ListaComponent,MovimientosComponent,
  InactivarComponent, ActivarCuentaComponent, CancelarCuentaComponent,EditarComponent]
