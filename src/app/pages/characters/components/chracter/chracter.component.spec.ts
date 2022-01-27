import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChracterComponent } from './chracter.component';

describe('ChracterComponent', () => {
  let component: ChracterComponent;
  let fixture: ComponentFixture<ChracterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChracterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
