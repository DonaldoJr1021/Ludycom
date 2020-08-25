import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasEditComponent } from './areas-edit.component';

describe('AreasEditComponent', () => {
  let component: AreasEditComponent;
  let fixture: ComponentFixture<AreasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
