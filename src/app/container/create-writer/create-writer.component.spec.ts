import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWriterComponent } from './create-writer.component';

describe('CreatePostComponent', () => {
  let component: CreateWriterComponent;
  let fixture: ComponentFixture<CreateWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
