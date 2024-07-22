import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderPageComponent } from './top-header-page.component';

describe('TopHeaderPageComponent', () => {
  let component: TopHeaderPageComponent;
  let fixture: ComponentFixture<TopHeaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopHeaderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
