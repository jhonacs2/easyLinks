import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLinkViewComponent } from './main-link-view.component';

describe('MainLinkViewComponent', () => {
  let component: MainLinkViewComponent;
  let fixture: ComponentFixture<MainLinkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLinkViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainLinkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
