import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComerciosAdheridosComponent } from './components/comercios-adheridos/comercios-adheridos.component';
import { PedidoComercioAdheridoComponent } from './components/pedido-comercio-adherido/pedido-comercio-adherido.component';
import { ConfirmacionPedidoComercioAdheridoComponent } from './components/confirmacion-pedido-comercio-adherido/confirmacion-pedido-comercio-adherido.component';
import { ThemeService } from './services/theme.service';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: '/comerciosAdheridos', pathMatch: 'full' },
  { path: 'comerciosAdheridos', component: ComerciosAdheridosComponent },
  {
    path: 'pedidoComercioAdherido',
    component: PedidoComercioAdheridoComponent,
  },
  {
    path: 'confirmacionPedidoComercioAdherido',
    component: ConfirmacionPedidoComercioAdheridoComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CommonModule,
  ],

  declarations: [AppComponent],
  providers: [ThemeService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
