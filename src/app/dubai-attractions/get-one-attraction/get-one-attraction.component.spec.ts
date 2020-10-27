import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneAttractionComponent } from './get-one-attraction.component';

describe('GetOneAttractionComponent', () => {
  let component: GetOneAttractionComponent;
  let fixture: ComponentFixture<GetOneAttractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneAttractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
