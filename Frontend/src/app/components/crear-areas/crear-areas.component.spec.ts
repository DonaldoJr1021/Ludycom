import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAreasComponent } from './crear-areas.component';

describe('CrearAreasComponent', () => {
  let component: CrearAreasComponent;
  let fixture: ComponentFixture<CrearAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
