import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWriterComponent } from './delete-writer.component';

describe('DeletePostComponent', () => {
  let component: DeleteWriterComponent;
  let fixture: ComponentFixture<DeleteWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
