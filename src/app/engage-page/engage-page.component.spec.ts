import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagePageComponent } from './engage-page.component';

describe('EngagePageComponent', () => {
  let component: EngagePageComponent;
  let fixture: ComponentFixture<EngagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
