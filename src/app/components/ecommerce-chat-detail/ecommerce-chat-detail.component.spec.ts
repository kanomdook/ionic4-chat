import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceChatDetailComponent } from './ecommerce-chat-detail.component';

describe('EcommerceChatDetailComponent', () => {
  let component: EcommerceChatDetailComponent;
  let fixture: ComponentFixture<EcommerceChatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceChatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceChatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
