import { Routes } from '@angular/router';
import { CadastrarPersonalComponent } from './components/home/cadastrar-personal/cadastrar-personal.component';
import { InicioComponent } from './components/home/inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {
    path: 'cadastrarPersonal',
    component: CadastrarPersonalComponent,
  },
];
