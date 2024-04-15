import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwStrengthComponent } from './pw-strength.component';

describe('PwStrengthComponent', () => {
  let component: PwStrengthComponent;
  let fixture: ComponentFixture<PwStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PwStrengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
