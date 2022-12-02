import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FilmsCard} from "../../models/film-card.model";
import {Observable} from "rxjs";
import {selectFilmsData} from "../../reducers/film-selectors";
import {select, Store} from "@ngrx/store";
import {FilmState} from "../../reducers/film-reducer";
import {FilmRequestedAction} from "../../reducers/film-action";
import {FilmService} from "../../service/film-service";
import {FilmsFiltrationParams} from "../../models/film-filtration";

@Component({
  selector: 'film-component',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  title = 'WorkWithAngular';
  filmsList: FilmsCard[] | undefined;
  searchName: string = '';
  public films$: Observable<FilmsCard[] | undefined> = this.store$.pipe(select(selectFilmsData));

  constructor(
    private appService: FilmService,
    private store$: Store<FilmState>) {
  }

  @Output()
  searchDataChanged = new EventEmitter<any>();
  ngOnInit() {

    this.loadData();

  }

  loadData(){
    this.films$.subscribe(films =>{
      this.filmsList = films;
    })
    this.store$.dispatch(new FilmRequestedAction)
  }

  searchedDataChanged (filmsFiltrationParams: FilmsFiltrationParams) {
    this.searchName = filmsFiltrationParams.searchName;
  }

}


