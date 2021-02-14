import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

export class PagingHeader {
  TotalCount: number;
  PageSize: number;
  CurrentPage: number;
  TotalPages: number;
  RangeStart: number;
  HasPreviousPage: boolean;
  HasNextPage: boolean;
  IsOrderByLatest: boolean;

  constructor(params: PagingHeader = {} as PagingHeader) {
    const {
      TotalCount = 0,
      PageSize = environment.defaultPageSize,
      CurrentPage = 1,
      TotalPages = 0,
      HasPreviousPage = false,
      HasNextPage = false,
      IsOrderByLatest = true
    } = params;

    this.TotalCount = TotalCount;
    this.PageSize = PageSize;
    this.CurrentPage = CurrentPage;
    this.TotalPages = TotalPages;
    this.HasPreviousPage = HasPreviousPage;
    this.HasNextPage = HasNextPage;
    this.IsOrderByLatest = IsOrderByLatest;
  }
}

