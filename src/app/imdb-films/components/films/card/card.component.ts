import {Component, Input} from "@angular/core";
import {NzModalModule, NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  isVisible = false;
  constructor(private modalService: NzModalService,) {
  }
  @Input()
  film: any;


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
