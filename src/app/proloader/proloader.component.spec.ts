import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProloaderComponent } from './proloader.component';

describe('ProloaderComponent', () => {
  let component: ProloaderComponent;
  let fixture: ComponentFixture<ProloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
