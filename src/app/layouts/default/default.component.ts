import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultLayout {
  @Input() showHeader = true;
  @Input() showFooter = true;
  @Input() showHeaderBurger = true;
  @Input() showNewsletter = true;
}
