import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPeliculasPrincipalesComponent } from './tarjeta-peliculas-principales.component';

describe('TarjetaPeliculasPrincipalesComponent', () => {
  let component: TarjetaPeliculasPrincipalesComponent;
  let fixture: ComponentFixture<TarjetaPeliculasPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPeliculasPrincipalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPeliculasPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
