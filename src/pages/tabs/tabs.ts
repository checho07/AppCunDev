import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { CunPage } from '../cun/cun';
import { DirectorioPage } from '../directorio/directorio';
import { NoticiasPage } from '../noticias/noticias';

@Component({
  templateUrl: 'tabs.html'
})




export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab5Root = NoticiasPage;
  tab6Root = UbicacionPage;
  tab7Root = CunPage;
  tab8Root = DirectorioPage;
  tab9Root = NotificacionesPage;

  constructor() {

  }
}
