import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemo } from './unit-testing-demo';

describe('UnitTestingDemo', () => {
  let component: UnitTestingDemo;
  let fixture: ComponentFixture<UnitTestingDemo>;

  beforeAll(() => {
    console.log('Before All...');
  });
  beforeEach(async () => {
    console.log('Before Each...');
    await TestBed.configureTestingModule({
      imports: [UnitTestingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    console.log('After Each...');
  });
  afterAll(() => {
    console.log('After All...');
  });

  it('should create', () => {
    console.log('It-1')
    expect(component).toBeTruthy();
  });

  it('should test add function', () => {
    console.log('It-2')
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(10, -20)).toBe(-10);
    expect(component.add(-10, -20)).toBe(-30);
    expect(component.add(-10, 20)).toBe(10);
  });

  it('should test sumOfDigits function', () => {
    console.log('It-3')
    expect(component.sumOfDigits(125)).toBe(8);
  });

  it('should test addNewCar function', () => {
    console.log('It-4')
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

  it('should call processData with the correct data', () => {
    const processDataSpy = vi.spyOn(component, 'processData'); // Spy For processData function
    const result = component.fetchData();
    expect(processDataSpy).toHaveBeenCalled(); // Verify processData was called
    expect(processDataSpy).toHaveBeenCalledWith(['item1', 'item2', 'item3']); // Verify correct arguments
    expect(result).toBe(3); // Verify the return value
  });

});
