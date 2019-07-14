import {Component, OnInit} from '@angular/core';
import {IPost} from '../../post-service/post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../post-service/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  ipost: IPost;
  postForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.ipost = next;
        this.postForm.patchValue(this.ipost);
      },
      error => {
        console.log(error);
        this.ipost = null;
      }
    );
  }

  onSubmit() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      const data = {
        ...this.ipost,
        ...value
      };
      this.postService.updatePost(data).subscribe(
        next => {
          alert('update success!');
          this.router.navigate(['/posts']);
        },
        error => console.log(error)
      );
    }
  }

}
