import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigliorinotizieComponent } from './migliorinotizie.component';

describe('MigliorinotizieComponent', () => {
  let component: MigliorinotizieComponent;
  let fixture: ComponentFixture<MigliorinotizieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigliorinotizieComponent]
    });
    fixture = TestBed.createComponent(MigliorinotizieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
