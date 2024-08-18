import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabrateComponent } from './collabrate.component';

describe('CollabrateComponent', () => {
  let component: CollabrateComponent;
  let fixture: ComponentFixture<CollabrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollabrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
