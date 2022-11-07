import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWriterComponent } from './list-writer.component';

describe('ListPostComponent', () => {
  let component: ListWriterComponent;
  let fixture: ComponentFixture<ListWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
