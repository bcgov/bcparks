import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignGuidesComponent } from './design-guides.component';

describe('DesignGuidesComponent', () => {
  let component: DesignGuidesComponent;
  let fixture: ComponentFixture<DesignGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignGuidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
