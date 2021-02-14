import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
