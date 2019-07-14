import {Component, OnInit} from '@angular/core';
import {IPost} from '../../post-service/post';
import {PostService} from '../../post-service/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  ipost: IPost;
  comments: any[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ipost = {
      userID: 0,
      id: 0,
      title: '',
      body: ''
    };
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.ipost = next;
        this.postService.getCommentsByPostId(this.ipost.id).subscribe(
          comments => {
            this.comments = comments;
          });
      },
      error => {
        console.log(error);
        this.ipost = null;
      }
    );
  }
}
