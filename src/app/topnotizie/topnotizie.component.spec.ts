import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnotizieComponent } from './topnotizie.component';

describe('TopnotizieComponent', () => {
  let component: TopnotizieComponent;
  let fixture: ComponentFixture<TopnotizieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopnotizieComponent]
    });
    fixture = TestBed.createComponent(TopnotizieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
