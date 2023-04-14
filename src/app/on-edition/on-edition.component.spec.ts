import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnEditionComponent } from './on-edition.component';

describe('OnEditionComponent', () => {
  let component: OnEditionComponent;
  let fixture: ComponentFixture<OnEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
