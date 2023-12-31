import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumTracksComponent } from './components/album-tracks/album-tracks.component';
import { ReviewButtonsComponent } from './components/review-buttons/review-buttons.component';
import { ReviewInAlbumPageComponent } from './components/review-in-album-page/review-in-album-page.component';

import { AlbumReviewsComponent } from './pages/album/album-reviews/album-reviews.component';
import { AlbumInfoComponent } from './pages/album/album-info/album-info.component';
import { AlbumIntroComponent } from './components/album-intro/album-intro.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { ProfileMainComponent } from './components/profile/profile-main/profile-main.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProfileMainPageComponent } from './pages/profile-main-page/profile-main-page.component';
import { ProfileReviewsPageComponent } from './pages/profile-reviews-page/profile-reviews-page.component';

import { ProfileReviewsComponent } from './components/profile/profile-reviews/profile-reviews.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { HomeLoggedinComponent } from './pages/home-loggedin/home-loggedin.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ReviewInProfilePageComponent } from './components/review-in-profile-page/review-in-profile-page.component';
import { AlreadyHasAReviewComponent } from './components/already-has-a-review/already-has-a-review.component';
import { AlbumModifyReviewComponent } from './pages/album/album-modify-review/album-modify-review.component';
import { ReviewFormModificationComponent } from './components/review-form-modification/review-form-modification.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumInfoComponent,
    AlbumTracksComponent,
    ReviewButtonsComponent,
    ReviewInAlbumPageComponent,
    NavbarComponent,
    HomeComponent,
    SearchArtistComponent,
    AlbumReviewsComponent,
    AlbumIntroComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    SearchResultPageComponent,
    NewReleasesComponent,
    ProfileMainComponent,
    SidebarComponent,
    ProfileMainPageComponent,
    ProfileReviewsPageComponent,
    ProfileReviewsComponent,
    LoginFormComponent,
    ShareButtonsComponent,
    HomeLoggedinComponent,
    Navbar2Component,
    ReviewFormComponent,
    FooterComponent,
    AboutPageComponent,
    ReviewInProfilePageComponent,
    AlreadyHasAReviewComponent,
    AlbumModifyReviewComponent,
    ReviewFormModificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
