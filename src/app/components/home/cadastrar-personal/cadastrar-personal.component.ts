import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Personal } from '../../entity/personal';
import { HomeService } from '../../services/home.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-personal',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [HomeService],
  templateUrl: './cadastrar-personal.component.html',
  styleUrl: './cadastrar-personal.component.scss',
})
export class CadastrarPersonalComponent {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: HomeService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      telefone: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      date: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      crm: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      cpf: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
    });
  }

  cadastrar(): void {
    if (!this.formulario.valid) {
      console.error('Formulário inválido, verifique os campos');
      alert('Formulário inválido, verifique os campos');
      return;
    }

    const personal = new Personal(
      this.formulario.value.nome,
      this.formulario.value.email,
      this.formulario.value.telefone,
      this.formulario.value.date,
      this.formulario.value.crm,
      this.formulario.value.cpf
    );

    this.service.cadastrar(personal).subscribe(() => {
      alert('Personal cadastrado com sucesso');
      this.router.navigate(['/login']);
    });
  }
}
