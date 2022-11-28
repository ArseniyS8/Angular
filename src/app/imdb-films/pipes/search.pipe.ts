import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(filmsList: any[], value: string) {
    return filmsList.filter((card: { title: { name: string | any[]; }; }) =>
      card.title.name.includes(value)
    )
  }
}


