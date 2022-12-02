import {Pipe, PipeTransform} from "@angular/core";
import {FilmsCard} from "../models/film-card.model";

@Pipe({
  name: 'searchFilms'
})
export class SearchFilmsPipe implements PipeTransform {
  transform(array: FilmsCard[] | undefined, searchName: string): FilmsCard[] | undefined  {
    var newArr = array;
    if (searchName) {
      searchName.toUpperCase();
      newArr = newArr?.filter((item: FilmsCard) =>
        (item.title?.includes(searchName))
        || (item.year?.includes(searchName))
        || (item.crew?.includes(searchName)))

    }
    return newArr;
  }
}


// export class SearchPipe implements PipeTransform {
//   transform(filmsList: any[], value: string) {
//     return filmsList.filter((card: { title: { name: string | any[]; }; }) =>
//       card.title.name.includes(value)
//     )
//   }
// }


