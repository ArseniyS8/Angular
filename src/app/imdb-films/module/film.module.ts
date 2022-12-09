import {RouterModule, Routes} from "@angular/router";
import {FilmComponent} from "../components/films/film.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {metaReducers, reducers} from "../reducers";
import {AppEffects} from "../effects/film-effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CardComponent} from "../components/films/card/card.component";
import {SearchFilmsPipe} from "../pipes/search-pipe";
import {SearchMenuComponent} from "../components/films/search-menu/search-menu.component";
import {TooltipMenu} from "../components/films/card/tooltip-menu/tooltip-menu";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzModalModule} from "ng-zorro-antd/modal";
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {TrailerComponent} from "../components/trailer/trailer.component";
import {NzIconModule} from "ng-zorro-antd/icon";


const routes: Routes = [
  {
    component: FilmComponent,
    path: ''
  },
  {
    component: TrailerComponent,
    path: 'trailer/:id'
  }
];
@NgModule({
  declarations: [
    FilmComponent,
    TrailerComponent,
    CardComponent,
    SearchMenuComponent,
    SearchFilmsPipe,
    TooltipMenu
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
    ]),
    NzDropDownModule,
    NzModalModule,
    NzButtonModule,
    NzDrawerModule,
    NzIconModule
  ]
})
export class FilmModule {
}
