import { environment } from 'src/environments/environment';

export class PaginationSettings {
  PageSize: number;
  OrderByLatest: boolean;

  constructor(params: PaginationSettings = {} as PaginationSettings) {
    const {
      PageSize = environment.defaultPageSize,
      OrderByLatest = environment.defaultOrderByLatest
    } = params;

    this.PageSize = PageSize;
    this.OrderByLatest = OrderByLatest;
  }
}
