import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {
  searchName: string = '';

  @Output()
  searchDataChanged = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  searchFilmsInList() {
    this.searchDataChanged.emit({searchName: this.searchName})
  }
}
