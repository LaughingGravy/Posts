import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from 'src/components/spa/spa.module';
import { CommonComponentsModule } from 'src/components/common/common-components.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentInstanceGenerationService } from 'src/services/component-instance-generation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule,
    HttpClientModule,
    SpaModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    ComponentInstanceGenerationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
