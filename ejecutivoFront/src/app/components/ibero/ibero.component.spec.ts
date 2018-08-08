import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBEROComponent } from './ibero.component';

describe('IBEROComponent', () => {
  let component: IBEROComponent;
  let fixture: ComponentFixture<IBEROComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBEROComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBEROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
