import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditDeleteComponent } from './comment-edit-delete.component';

describe('CommentEditDeleteComponent', () => {
  let component: CommentEditDeleteComponent;
  let fixture: ComponentFixture<CommentEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentEditDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
