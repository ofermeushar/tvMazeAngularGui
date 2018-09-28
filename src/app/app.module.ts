import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ShowPageComponent } from './components/show-page/show-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TvMazeService } from "./services/tv-maze.service";
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowSeasonsComponent } from './components/show-seasons/show-seasons.component';
import { ShowCastComponent } from './components/show-cast/show-cast.component';
import { ShowCrewComponent } from './components/show-crew/show-crew.component';
import { PesronProfilePageComponent } from './components/pesron-profile-page/pesron-profile-page.component';
import { ArrayDisplayComponent } from './array-display/array-display.component';
import { PersonCastComponent } from './components/person-cast/person-cast.component';
import { PersonCrewComponent } from './components/person-crew/person-crew.component';
import { SeasonPageComponent } from './components/season-page/season-page.component';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthDropDownComponent } from './components/auth-drop-down/auth-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    ShowPageComponent,
    SearchResultsPageComponent,
    HomePageComponent,
    ShowCardComponent,
    ShowSeasonsComponent,
    ShowCastComponent,
    ShowCrewComponent,
    PesronProfilePageComponent,
    ArrayDisplayComponent,
    PersonCastComponent,
    PersonCrewComponent,
    SeasonPageComponent,
    EpisodePageComponent,
    LoginComponent,
    RegisterComponent,
    AuthDropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [TvMazeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
