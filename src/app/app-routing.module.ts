import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PostListComponent} from './post/post-list/post-list.component';
import {PostDetailComponent} from './post/post-detail/post-detail.component';
import {PostEditComponent} from './post/post-edit/post-edit.component';
import {PostAddComponent} from './post/post-add/post-add.component';
import {PostDeleteComponent} from './post/post-delete/post-delete.component';
import {CommentCreateComponent} from './comment/comment-create/comment-create.component';
import {CommentEditDeleteComponent} from './comment/comment-edit-delete/comment-edit-delete.component';

const routes: Routes = [{
  path: 'posts',
  component: PostListComponent
}, {
  path: 'post/:id',
  component: PostDetailComponent
}, {
  path: 'post/:id/edit',
  component: PostEditComponent
}, {
  path: 'post-add',
  component: PostAddComponent
}, {
  path: 'post/:id/delete',
  component: PostDeleteComponent
}, {
  path: 'comment-create',
  component: CommentCreateComponent
}, {
  path: 'comment/:id/edit-delete',
  component: CommentEditDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
