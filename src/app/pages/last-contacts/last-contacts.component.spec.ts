import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastContactsComponent } from './last-contacts.component';

describe('LastContactsComponent', () => {
  let component: LastContactsComponent;
  let fixture: ComponentFixture<LastContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
