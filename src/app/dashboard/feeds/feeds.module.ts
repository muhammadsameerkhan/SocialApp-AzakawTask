import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { NewsFeedsComponent } from './news-feeds/news-feeds.component';
import { SharedcomponentsModule } from "../../sharedcomponents/sharedcomponents.module";

@NgModule({
  declarations: [
    NewsFeedsComponent
  ],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    SharedcomponentsModule
  ]
})
export class FeedsModule { }
