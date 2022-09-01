import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { ListComponent } from './list/list.component';
import { SharedcomponentsModule } from "../../sharedcomponents/sharedcomponents.module";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedcomponentsModule
  ]
})
export class FriendsModule { }
