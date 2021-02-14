import { Poster } from './poster';
import { Comment } from '../../comment/models/comment';

export class Post {
  Id: number;
  Title: string;
  Body: string;
  Poster: Poster;
  Comments: Comment[];

  constructor(params: Post = {} as Post) {
    const {
      Id = null,
      Title = null,
      Body = null,
      Poster = null,
      Comments = []
    } = params;

    this.Id = Id;
    this.Title = Title;
    this.Body = Body;
    this.Poster = Poster;
    this.Comments = Comments;
  }
}
