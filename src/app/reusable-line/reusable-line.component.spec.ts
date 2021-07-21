import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableLineComponent } from './reusable-line.component';

describe('ReusableLineComponent', () => {
  let component: ReusableLineComponent;
  let fixture: ComponentFixture<ReusableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
