export class Poster {
  UserId: number;
  Username: string;

  constructor(params: Poster = {} as Poster) {
    const {
      UserId = null,
      Username = null
    } = params;

    this.UserId = UserId;
    this.Username = Username;
  }
}
