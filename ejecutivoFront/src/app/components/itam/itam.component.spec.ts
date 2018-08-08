import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITAMComponent } from './itam.component';

describe('ITAMComponent', () => {
  let component: ITAMComponent;
  let fixture: ComponentFixture<ITAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
