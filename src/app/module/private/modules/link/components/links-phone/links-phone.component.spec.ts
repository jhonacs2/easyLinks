import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksPhoneComponent } from './links-phone.component';

describe('LinksPhoneComponent', () => {
  let component: LinksPhoneComponent;
  let fixture: ComponentFixture<LinksPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinksPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinksPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
