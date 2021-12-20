import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNavBarItemComponent } from './logo-nav-bar-item.component';

describe('LogoNavBarItemComponent', () => {
  let component: LogoNavBarItemComponent;
  let fixture: ComponentFixture<LogoNavBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoNavBarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
