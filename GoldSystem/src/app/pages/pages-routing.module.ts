import { AirdropComponent } from './airdrop/airdrop.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { AlianzaComponent } from './alianza/alianza.component';
import { Gs10Component } from './gs10/gs10.component';
import { VisionComponent } from './vision/vision.component';
import { MisionComponent } from './mision/mision.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FundacionComponent } from './fundacion/fundacion.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fundación',
    component: FundacionComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'misión',
    component: MisionComponent,
  },
  {
    path: 'airdrop',
    component: AirdropComponent,
  },
  {
    path: 'visión',
    component: VisionComponent,
  },
  {
    path: 'gs10',
    component: Gs10Component,
  },
  {
    path: 'alianzas',
    component: AlianzaComponent,
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
