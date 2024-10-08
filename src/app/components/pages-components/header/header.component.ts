import { Component, Input } from '@angular/core';
import { EnvService } from '@shared/env.service';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { LinksListInterface } from '@interfaces/links-list.interface';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(0, -100vh, 0)'
        })
      ),
      transition(
        'in => out',
        animate('400ms cubic-bezier(0.645, 0.045, 0.355, 1)')
      ),
      transition(
        'out => in',
        animate('400ms cubic-bezier(0.645, 0.045, 0.355, 1)')
      )
    ]),
    trigger('crossTransformFirst', [
      state(
        'initial',
        style({
          transform: 'rotate(0deg)'
        })
      ),
      state(
        'cross',
        style({
          transform: 'rotate(45deg) translateY(5px)'
        })
      ),
      transition('initial <=> cross', animate('400ms ease-in-out'))
    ]),
    trigger('crossTransformSecond', [
      state(
        'initial',
        style({
          transform: 'rotate(0deg)'
        })
      ),
      state(
        'cross',
        style({
          transform: 'rotate(135deg) translateY(5px)'
        })
      ),
      transition('initial <=> cross', animate('400ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent {
  @Input() showHeaderBurger: boolean;

  postsSearchQuery: string;
  showNavigationBarMenu = false;
  showNavigationSearch = false;
  showLanguageMenu = false;
  hamburgerState = 'initial';
  navigationBarLinks: Array<LinksListInterface> = [
    {
      link: '',
      value: 'Homepage'
    },
    {
      link: 'blog',
      value: 'Blog'
    },
    {
      link: 'contact',
      value: 'Contact'
    },
    {
      link: 'about',
      value: 'About'
    }
  ];

  constructor(
    private readonly router: Router,
    private readonly envService: EnvService
  ) {}

  searchIcon = `${this.envService.getStaticStorageLink}/icons/search.png`;

  toggleMenu() {
    this.showNavigationBarMenu = !this.showNavigationBarMenu;
    this.hamburgerState =
      this.hamburgerState === 'initial' ? 'cross' : 'initial';
  }

  toggleSearch() {
    this.showNavigationSearch = !this.showNavigationSearch;
    if (!this.showNavigationSearch) this.postsSearchQuery = '';
  }

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
