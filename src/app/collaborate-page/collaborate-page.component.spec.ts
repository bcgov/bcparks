import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratePageComponent } from './collaborate-page.component';

describe('CollaboratePageComponent', () => {
  let component: CollaboratePageComponent;
  let fixture: ComponentFixture<CollaboratePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
