import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemo } from './unit-testing-demo';

describe('UnitTestingDemo', () => {
  let component: UnitTestingDemo;
  let fixture: ComponentFixture<UnitTestingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTestingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test add function', () => {
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(10, -20)).toBe(-10);
    expect(component.add(-10, -20)).toBe(-30);
    expect(component.add(-10, 20)).toBe(10);
  });

  it('should test sumOfDigits function', () => {
    expect(component.sumOfDigits(125)).toBe(8);
  });

  it('should test addNewCar function', () => {
    expect(component.cars).toBeDefined();
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars.length).toBe(2);
    expect(component.cars).toContain('Tata');
    expect(component.cars).not.toContain('Maruti');
    component.addNewCar('Maruti');
    expect(component.cars).toBeDefined();
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars.length).toBe(3);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Maruti');
    expect(component.cars).not.toContain('Hyundai');
  });
});
