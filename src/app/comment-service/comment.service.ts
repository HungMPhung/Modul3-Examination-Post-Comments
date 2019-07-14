import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../post-service/post';
import {map} from 'rxjs/operators';
import {IComment} from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly API_URL = 'http://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getComments(count = 10): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.API_URL).pipe(
      map(response => response.filter((comment, i) => i < count))
    );
  }

  getCommentById(id: number): Observable<IComment> {
    return this.http.get<IComment>(`${this.API_URL}/${id}`);
  }

  createComment(comment: Partial<IComment>): Observable<IComment> {
    return this.http.post<IComment>(this.API_URL, comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  editComment(comment: IComment): Observable<IComment> {
    return this.http.patch<IComment>(`${this.API_URL}/${comment.id}`, comment);
  }
}
