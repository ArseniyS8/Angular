import {Component, Input} from "@angular/core";
import {FilmsCard} from "../../../../models/film-models/film-card.model";

@Component({
    selector: 'tooltip-menu',
    templateUrl: './tooltip-menu.html',
    styleUrls: ['./tooltip-menu.scss']
  }
)

export class TooltipMenu {
  @Input()
  filmInfo: FilmsCard | undefined;
}
