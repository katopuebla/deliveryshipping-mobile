import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SegundaComponent } from '../pages/segunda/segunda.component';
import { LoginComponent } from '../pages/login/login.component';
import { EntregaComponent } from '../pages/entrega/entrega.component';
import { ModalConfirm } from '../pages/entrega/modal-confirm';
import { EnviosService } from './service/envios.service';

import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SegundaComponent,
    LoginComponent,
    EntregaComponent,
    ModalConfirm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SegundaComponent,
    LoginComponent,
    EntregaComponent,
    ModalConfirm
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    , EnviosService
    , BarcodeScanner
  ]
})
export class AppModule {}
