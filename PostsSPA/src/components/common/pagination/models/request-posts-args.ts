export class RequestPostsArgs {
  PageNumber: number;

  constructor(params: RequestPostsArgs = {} as RequestPostsArgs) {
    const {
      PageNumber = 1,
    } = params;

    this.PageNumber = PageNumber;
  }
}
