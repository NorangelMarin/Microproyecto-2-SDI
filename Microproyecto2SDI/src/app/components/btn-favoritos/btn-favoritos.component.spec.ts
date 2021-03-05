import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFavoritosComponent } from './btn-favoritos.component';

describe('BtnFavoritosComponent', () => {
  let component: BtnFavoritosComponent;
  let fixture: ComponentFixture<BtnFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
