import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostDeleteComponent } from './post/post-delete/post-delete.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { CommentCreateComponent } from './comment/comment-create/comment-create.component';
import {CommentEditDeleteComponent} from './comment/comment-edit-delete/comment-edit-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDeleteComponent,
    PostDetailComponent,
    CommentCreateComponent,
    CommentEditDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
