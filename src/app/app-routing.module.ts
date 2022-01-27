import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Vistas/home/home.component';
import {NuevoComponent} from './Vistas/Clientes/nuevo/nuevo.component';
import {ListaComponent} from './Vistas/Cuentas/lista/lista.component';
import {MovimientosComponent} from './Vistas/Cuentas/movimientos/movimientos.component';
import {InactivarComponent} from './Vistas/Cuentas/inactivar/inactivar.component';
import {ActivarCuentaComponent} from './Vistas/Cuentas/activar-cuenta/activar-cuenta.component';
import {CancelarCuentaComponent} from './Vistas/Cuentas/cancelar-cuenta/cancelar-cuenta.component';
import {EditarComponent} from './Vistas/Clientes/editar/editar.component';
import { EditarClienteComponent } from './Vistas/Clientes/editar-cliente/editar-cliente.component';
import { InactivarClienteComponent } from './Vistas/Clientes/inactivar-cliente/inactivar-cliente.component';
import { ActivarClienteComponent } from './Vistas/Clientes/activar-cliente/activar-cliente.component';
import { NuevaCuentaComponent } from './Vistas/Cuentas/nueva-cuenta/nueva-cuenta.component';

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
  {path: 'EditandoCliente/:ListaClientesI', component:EditarClienteComponent},
  {path: 'InactivarCliente/:id', component:InactivarClienteComponent},
  {path: 'ActivarCliente/:id', component:ActivarClienteComponent},
  {path: 'NuevaCuenta/:id', component:NuevaCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,NuevoComponent,ListaComponent,MovimientosComponent,
  InactivarComponent, ActivarCuentaComponent, CancelarCuentaComponent,EditarClienteComponent,EditarComponent]
