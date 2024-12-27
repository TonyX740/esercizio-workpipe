import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteDialogComponent } from './utente-dialog.component';

describe('UtenteDialogComponent', () => {
  let component: UtenteDialogComponent;
  let fixture: ComponentFixture<UtenteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtenteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtenteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
