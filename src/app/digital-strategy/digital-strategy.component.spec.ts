import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStrategyComponent } from './digital-strategy.component';

describe('DigitalStrategyComponent', () => {
  let component: DigitalStrategyComponent;
  let fixture: ComponentFixture<DigitalStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
