import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSourceComponent } from './github-source.component';

describe('GithubSourceComponent', () => {
  let component: GithubSourceComponent;
  let fixture: ComponentFixture<GithubSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
