import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IComment} from '../../comment-service/comment';
import {CommentService} from '../../comment-service/comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  commentList: IComment[] = [];
  commentForm: FormGroup;

  constructor(private commentService: CommentService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        body: ['', Validators.required],
      }
    );
    this.commentService
      .getComments()
      .subscribe(next => (this.commentList = next), error => (this.commentList = []));

  }

  createPost() {
    if (this.commentForm.valid) {
      const {value} = this.commentForm;
      this.commentService.createComment(value).subscribe(
        next => {
          alert('Create a new Comment success!');
          this.commentForm.reset();
        },
        error => (console.log(error))
      );
    }
  }

}
