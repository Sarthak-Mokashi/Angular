import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEncapsulationComponent } from './test-encapsulation.component';

describe('TestEncapsulationComponent', () => {
  let component: TestEncapsulationComponent;
  let fixture: ComponentFixture<TestEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEncapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
