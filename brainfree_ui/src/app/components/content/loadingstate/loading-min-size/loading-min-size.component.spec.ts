import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingMinSizeComponent } from './loading-min-size.component';

describe('LoadingMinSizeComponent', () => {
  let component: LoadingMinSizeComponent;
  let fixture: ComponentFixture<LoadingMinSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingMinSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingMinSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
