import { Component, OnInit } from '@angular/core';
import {IPost} from '../../post-service/post';
import {PostService} from '../../post-service/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  ipost: IPost;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.ipost = next;
      },
      error => {
        console.log(error);
        this.ipost = null;
      });
  }

  deletePost() {
    this.postService.deletePost(this.ipost.id).subscribe(
      next => {
        alert('Delete success!');
        this.router.navigate(['/posts']);
      },
      error => console.log(error)
    ); }
}
