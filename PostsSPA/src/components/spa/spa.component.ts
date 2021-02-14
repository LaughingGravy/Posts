import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PaginationDefinition } from '../common/pagination/models/pagination-definition';
import { RequestPostsArgs } from '../common/pagination/models/request-posts-args';
import { PaginationSettings } from './pagination-settings/models/PaginationSettings';
import { PagingHeader } from './post/models/paging-header';
import { PagingParams } from './post/models/paging-params';
import { Post } from './post/models/post';
import { PostService } from './services/post/post.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit {
  isDataLoaded: boolean = false;
  pagingHeader: PagingHeader;
  pagingSettings: PaginationSettings;
  paginationDefinition: PaginationDefinition;
  posts: Post[] = [];

  public onPaginationSettingsChanged(settings: PaginationSettings): void {
    this.pagingSettings = settings;
  }

  public onGetPostsRequested(requestPostsArgs: RequestPostsArgs): void {
    const pagingParams = new PagingParams({
      PageSize: this.pagingSettings.PageSize,
      PageNumber: requestPostsArgs.PageNumber,
      IsOrderByLatest: !!this.pagingSettings.OrderByLatest
    });

    this.initiateSearch(pagingParams);
  }

  constructor(private postService: PostService) {
    this.pagingSettings = new PaginationSettings();
  }

  ngOnInit() {
    this.initiateSearch(new PagingParams());
  }

  private initiateSearch(pagingParams: PagingParams): void {
    this.loadPosts(pagingParams)
      .subscribe(() => {

        this.paginationDefinition = new PaginationDefinition({
          TotalRecordCount: this.pagingHeader.TotalCount,
          CurrentPage: this.pagingHeader.CurrentPage,
          TotalPages: this.pagingHeader.TotalPages,
          HasPreviousPage: this.pagingHeader.HasPreviousPage,
          HasNextPage: this.pagingHeader.HasNextPage
        });

        this.isDataLoaded = true;
      });
  }

  private loadPosts(pagingParams: PagingParams): Observable<HttpResponse<Post[]> | boolean> {
    this.isDataLoaded = false;

    return this.postService.getPosts(pagingParams)
                .pipe(
                  map((response) => {
                    this.posts = response.body;

                    this.pagingHeader = JSON.parse(response.headers.get(environment.pagingHeaders));

                    return true;
                  })
                );
  }

}
