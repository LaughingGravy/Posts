export class Comment {
  Id: number;
  PostId: number;
  Name: string;
  Body: string;

  constructor(params: Comment = {} as Comment) {
    const {
      Id = null,
      PostId = null,
      Name = null,
      Body = null
    } = params;

    this.Id = Id;
    this.PostId = this.PostId;
    this.Name = Name;
    this.Body = Body;
  }
}
