import {RouterModule, Routes} from "@angular/router";
import {FilmComponent} from "./components/films/film.component";
import {NgModule} from "@angular/core";
import {SearchPipe} from "./pipes/search.pipe";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {metaReducers, reducers} from "./reducers";
import {AppEffects} from "./film.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CardComponent} from "./components/films/card/card.component";


const routes: Routes = [
  {
    component: FilmComponent,
    path: ''
  }
];
@NgModule({
  declarations: [
    FilmComponent,
    SearchPipe,
    CardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([
      AppEffects
    ])
  ]
})
export class FilmModule {
}
