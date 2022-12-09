import {Component, OnInit} from "@angular/core";
import {TrailerService} from "../../service/trailer.service";
import {TrailerModel} from "../../models/trailer-models/trailer.model";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Location} from "@angular/common";

@Component({
  selector: 'trailer-component',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  trailer: TrailerModel | undefined;
  id: string = '';
  urlSafe!: SafeResourceUrl;

  constructor(
    private trailerService: TrailerService,
    private activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  back(): void {
    this.location.back()
  }

  loadData() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.trailerService.getTrailerResponseModel(this.id).subscribe((data: TrailerModel) => {
      this.trailer = data
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.linkEmbed!);
    })
  }}
