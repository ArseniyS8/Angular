import {Component, Input} from "@angular/core";

@Component({
    selector:'tooltip-menu',
    templateUrl:'./tooltip-menu.html',
    styleUrls:['./tooltip-menu.scss']
  }
)
export class TooltipMenu{
  @Input()
  filmInfo: any;
}
