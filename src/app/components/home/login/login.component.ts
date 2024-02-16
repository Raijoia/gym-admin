import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IPersonal } from '../../interfaces/personal';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  providers: [HomeService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formulario!: FormGroup;
  personal: IPersonal[] = [];

  constructor(
      private homeService: HomeService,
      private formBuilder: FormBuilder,
      private router: Router
    ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [''],
      crm: [''],
      cpf: [''],
    });
  }

  login(): void {
    if (!this.formulario.valid) {
      alert('Preencha todos os campos');
      return;
    }

    this.homeService.listar().subscribe((response) => {
      this.personal = response.filter((personal) => {
        return (
          personal.email === this.formulario.value.email &&
          personal.crm === this.formulario.value.crm &&
          personal.cpf === this.formulario.value.cpf
        );
      })

      if (this.personal.length === 0) {
        alert('Personal não encontrado');
        return;
      }

      console.log(this.personal)
      alert('Login efetuado com sucesso')
      this.router.navigate(['/']);
    });
  }
}
