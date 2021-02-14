export class PaginationDefinition {
  TotalRecordCount: number;
  CurrentPage: number;
  TotalPages: number;
  HasPreviousPage: boolean;
  HasNextPage: boolean;

  constructor(params: PaginationDefinition = {} as PaginationDefinition) {
    const {
      TotalRecordCount = 0,
      CurrentPage = 0,
      TotalPages = 0,
      HasNextPage = false,
      HasPreviousPage = false
    } = params;

    this.TotalRecordCount = TotalRecordCount;
    this.CurrentPage = CurrentPage;
    this.TotalPages = TotalPages;
    this.HasPreviousPage = HasPreviousPage;
    this.HasNextPage = HasNextPage;
  }
}
