import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionFirstComponent } from './transition-first.component';

describe('TransitionFirstComponent', () => {
  let component: TransitionFirstComponent;
  let fixture: ComponentFixture<TransitionFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
