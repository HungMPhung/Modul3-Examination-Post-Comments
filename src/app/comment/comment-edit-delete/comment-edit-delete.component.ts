import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {IComment} from '../../comment-service/comment';
import {CommentService} from '../../comment-service/comment.service';


@Component({
  selector: 'app-comment-edit-delete',
  templateUrl: './comment-edit-delete.component.html',
  styleUrls: ['./comment-edit-delete.component.css']
})
export class CommentEditDeleteComponent implements OnInit {

  iComment: IComment;
  commentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      body: ['', Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentById(id).subscribe(
      next => {
        this.iComment = next;
        this.commentForm.patchValue(this.iComment);
      },
      error => {
        console.log(error);
        this.iComment = null;
      }
    );
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const {value} = this.commentForm;
      const data = {
        ...this.iComment,
        ...value
      };
      this.commentService.editComment(data).subscribe(
        next => {
          alert('edit success!');
        },
        error => console.log(error)
      );
    }
  }
  deletePost() {
    this.commentService.deleteComment(this.iComment.id).subscribe(
      next => {
        alert('Delete success!');
        this.router.navigate(['/posts']);
      },
      error => console.log(error)
    ); }

}
