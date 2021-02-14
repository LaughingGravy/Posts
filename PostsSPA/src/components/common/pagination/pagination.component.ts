import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PaginationDefinition } from './models/pagination-definition';
import { RequestPostsArgs } from './models/request-posts-args';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() paginationDefinition: PaginationDefinition;
  @Output() getPostsRequested = new EventEmitter<RequestPostsArgs>();

  public startPage: number = 1;
  public currentPage: number = 1;

  public requestPage(pageRequested: number): void {
    this.getPostsRequested.emit(new RequestPostsArgs({ PageNumber: pageRequested}));
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.paginationDefinition.firstChange) {
      const pgDefinition: PaginationDefinition = (<PaginationDefinition>changes.paginationDefinition.currentValue);

      const pageBlock: number =  Math.floor(pgDefinition.CurrentPage / 5);

      this.startPage = (pgDefinition.CurrentPage % 5 == 0) ? ((pageBlock * 5)- 4) : (pageBlock * 5) + 1;
    }
  }

}
