import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FundacionComponent } from './fundacion/fundacion.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ContactoComponent } from './contacto/contacto.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { Gs10Component } from './gs10/gs10.component';
import { ChartsModule } from 'ng2-charts';
import { AlianzaComponent } from './alianza/alianza.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { AirdropComponent } from './airdrop/airdrop.component';
@NgModule({
  declarations: [
    HomeComponent,
    FundacionComponent,
    ContactoComponent,
    MisionComponent,
    VisionComponent,
    Gs10Component,
    AlianzaComponent,
    QuienesSomosComponent,
    AirdropComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AnimateOnScrollModule.forRoot(),
    ChartsModule,
  ],
})
export class PagesModule {}
