import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeaturedCardComponent,
    HomeComponent,
    PostCardComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
