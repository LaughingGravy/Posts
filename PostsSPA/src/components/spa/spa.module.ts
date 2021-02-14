import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaComponent } from './spa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationSettingsComponent } from './pagination-settings/pagination-settings.component';
import { CommonComponentsModule } from '../common/common-components.module';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post/post.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentComponent } from './comment/comment.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, CommonComponentsModule, NgbModule, DirectivesModule
  ],
  declarations: [SpaComponent, SpaHeaderComponent, PaginationSettingsComponent, PostsContainerComponent, PostComponent, CommentComponent],
  providers: [PostService],
  exports: [SpaComponent, SpaHeaderComponent, PaginationSettingsComponent, PostsContainerComponent, PostComponent, CommentComponent],
})
export class SpaModule { }
