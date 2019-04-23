import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EntregaComponent } from '../entrega/entrega.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EntregaComponent;
  tab3Root = AboutPage;


  constructor() {

  }
}
