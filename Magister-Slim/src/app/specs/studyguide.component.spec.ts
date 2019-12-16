import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyguideComponent } from '../typescripts/studyguide.component';

describe('StudyguideComponent', () => {
  let component: StudyguideComponent;
  let fixture: ComponentFixture<StudyguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
