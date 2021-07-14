import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJumbotronComponent } from './main-jumbotron.component';

describe('MainJumbotronComponent', () => {
  let component: MainJumbotronComponent;
  let fixture: ComponentFixture<MainJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainJumbotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
