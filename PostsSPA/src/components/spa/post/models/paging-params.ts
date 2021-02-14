import { environment } from 'src/environments/environment';

export class PagingParams {
  PageSize: number;
  PageNumber: number;
  IsOrderByLatest: boolean;

  constructor(params: PagingParams = {} as PagingParams) {
    const {
      PageSize = environment.defaultPageSize,
      PageNumber = 1,
      IsOrderByLatest = environment.defaultOrderByLatest
    } = params;

    this.PageSize = PageSize;
    this.PageNumber = PageNumber;
    this.IsOrderByLatest = IsOrderByLatest;
  }
}

