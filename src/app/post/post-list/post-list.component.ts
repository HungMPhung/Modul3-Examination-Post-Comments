import {Component, OnInit} from '@angular/core';
import {IPost} from '../../post-service/post';
import {PostService} from '../../post-service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: IPost[] = [];
  constructor(
    private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      next => (this.postList = next),
      error => (this.postList = [])
    );
  }

}
