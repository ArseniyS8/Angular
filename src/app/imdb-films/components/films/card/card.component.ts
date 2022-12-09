import {Component, Input} from "@angular/core";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})

export class CardComponent {
  isVisible = false;

  constructor() {
  }

  @Input()
  film: any;

  visible: boolean = false;

  showModal(id: string): void {
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

