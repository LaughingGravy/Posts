import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentInstanceGenerationService } from 'src/services/component-instance-generation.service';
import { AnchoredItem } from 'src/services/models/anchored-item';
import { Post } from '../post/models/post';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit, OnChanges {
  @Input() posts: Post[];
  @ViewChild('postsHost', { static: true, read: ViewContainerRef }) postsHost;

  public loadPosts(posts: Post[]): void {
    this.postsHost.clear();

    const anchoredItems = posts.map(p => new AnchoredItem(PostComponent, p));

    this.componentInstanceGenerationService.loadComponents(this.postsHost, anchoredItems);
  }

  constructor(private componentInstanceGenerationService: ComponentInstanceGenerationService<PostComponent>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.posts.firstChange) {
      const postsToLoad: Post[] = changes.posts.currentValue;
      this.loadPosts(postsToLoad);
    }
  }

}
