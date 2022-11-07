import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWriterComponent } from './update-writer.component';

describe('UpdatePostComponent', () => {
  let component: UpdateWriterComponent;
  let fixture: ComponentFixture<UpdateWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
