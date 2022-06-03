import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAccountDetailComponent } from './active-account-detail.component';

describe('ActiveAccountDetailComponent', () => {
  let component: ActiveAccountDetailComponent;
  let fixture: ComponentFixture<ActiveAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAccountDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
