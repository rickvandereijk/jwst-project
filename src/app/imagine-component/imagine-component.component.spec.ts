import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagineComponentComponent } from './imagine-component.component';

describe('ImagineComponentComponent', () => {
  let component: ImagineComponentComponent;
  let fixture: ComponentFixture<ImagineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagineComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
