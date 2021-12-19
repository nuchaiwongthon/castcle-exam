import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss'],
})
export class NextPageComponent implements OnInit {
  @Input() item: any;
  constructor(private router: Router) {}

  ngOnInit() {}
  /**
   * direct page follow input parameter.
   */
  nextPage() {
    if (this.item?.state) {
      this.router.navigate([this.item.route], { state: this.item.state } as NavigationExtras );
    } else {
      this.router.navigate([this.item.route]);
    }
  }
}
