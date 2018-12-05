import { observable } from 'mobx';

export class Movie {
    @observable original_title;
    @observable id;
    @observable poster_path;
    @observable overview;

    constructor(item) {
      this.original_title = item.original_title;
      this.id = item.id;
      this.poster_path = item.poster_path;
      this.overview = item.overview;
    }
}

export default Movie;
