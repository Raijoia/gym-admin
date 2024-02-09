import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPersonalComponent } from './cadastrar-personal.component';

describe('CadastrarPersonalComponent', () => {
  let component: CadastrarPersonalComponent;
  let fixture: ComponentFixture<CadastrarPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
