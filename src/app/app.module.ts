import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";
import { FeedsModule } from "./dashboard/feeds/feeds.module";
import { FriendsModule } from "./dashboard/friends/friends.module";
import { SharedcomponentsModule } from "./sharedcomponents/sharedcomponents.module";
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),

    LoginModule,
    FeedsModule,
    FriendsModule,
    SharedcomponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
