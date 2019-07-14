import { Component, OnInit } from '@angular/core';
import {IPost} from '../../post-service/post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../post-service/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  postList: IPost[] = [];
  postForm: FormGroup;

  constructor(private postService: PostService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.postForm = this.fb.group({
        title: ['', Validators.required],
        body: ['', Validators.required],
      }
    );
    this.postService
      .getPosts()
      .subscribe(next => (this.postList = next), error => (this.postList = []));

  }

  createPost() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.postService.createPost(value).subscribe(
        next => {
          alert('add a new Post success!');
          this.postForm.reset();
        },
        error => (console.log(error))
      );
    }
  }

}
