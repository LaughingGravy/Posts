import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PagingParams } from '../../post/models/paging-params';
import { Observable } from 'rxjs';
import { Post } from '../../post/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts(pagingParams: PagingParams): Observable<HttpResponse<Post[]>> {
    const url = `${this.baseUrl}posts?&pageNumber=${pagingParams.PageNumber}&pageSize=${pagingParams.PageSize}&isOrderByLatest=${pagingParams.IsOrderByLatest}`;
    return this.http.get<Post[]>(url, {observe: "response"});
  }

}
