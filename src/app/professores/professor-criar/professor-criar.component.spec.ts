import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCriarComponent } from './professor-criar.component';

describe('ProfessorCriarComponent', () => {
  let component: ProfessorCriarComponent;
  let fixture: ComponentFixture<ProfessorCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
