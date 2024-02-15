import { Routes } from '@angular/router';
import { CadastrarPersonalComponent } from './components/home/cadastrar-personal/cadastrar-personal.component';
import { InicioComponent } from './components/home/inicio/inicio.component';
import { LoginComponent } from './components/home/login/login.component';

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
  {
    path: 'login',
    component: LoginComponent,
  },
];
