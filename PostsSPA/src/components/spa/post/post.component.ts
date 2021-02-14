import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data: Post;

  public isPostCollapsed: boolean = true;

  collapseICon(isCollapsed: boolean) {
    return isCollapsed ? '▼' : '▲';
  }

  constructor() { }

  ngOnInit() {
  }

}
