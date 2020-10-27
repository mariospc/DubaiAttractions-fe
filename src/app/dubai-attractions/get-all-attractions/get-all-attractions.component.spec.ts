import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAttractionsComponent } from './get-all-attractions.component';

describe('GetAllAttractionsComponent', () => {
  let component: GetAllAttractionsComponent;
  let fixture: ComponentFixture<GetAllAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllAttractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
