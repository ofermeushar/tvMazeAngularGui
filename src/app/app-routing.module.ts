import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { SearchResultsPageComponent } from "./components/search-results-page/search-results-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ShowPageComponent } from "./components/show-page/show-page.component";
import { PesronProfilePageComponent } from "./components/pesron-profile-page/pesron-profile-page.component";
import { SeasonPageComponent } from "./components/season-page/season-page.component";
import { EpisodePageComponent } from "./components/episode-page/episode-page.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes:Routes=[
    {path: '',component:HomePageComponent},
    {path: 'searchResultsPage',component:SearchResultsPageComponent},
    {path: 'showPage/:id',component:ShowPageComponent},
    {path: 'person/:id',component:PesronProfilePageComponent},
    {path: 'season/:id',component:SeasonPageComponent},
    {path: 'episode',component:EpisodePageComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent}
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents =[
    HomePageComponent,
    SearchResultsPageComponent,
    ShowPageComponent,
    PesronProfilePageComponent,
    SeasonPageComponent,
    EpisodePageComponent,
]