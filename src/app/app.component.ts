import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { delay, filter, map, tap } from 'rxjs/operators';

import { ColorModeService } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

import { ToastModule } from 'primeng/toast'
import { AuthService } from './services/auth.service';

import { LoaderComponent } from './shared/loader/loader.component';

@Component({
    selector: 'app-root',
    template: `
    <!-- Toast container (global) -->
    <p-toast position="top-right" style="width:auto;max-width:90vw;" appendTo="body"></p-toast>

    <!-- Routed components -->
    <router-outlet></router-outlet>

    <app-loader></app-loader>
  `,
    imports: [RouterOutlet,ToastModule,LoaderComponent]
})
export class AppComponent implements OnInit {
  title = 'WebAppByPM';

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #titleService = inject(Title);

  readonly #colorModeService = inject(ColorModeService);
  readonly #iconSetService = inject(IconSetService);

  constructor(private authService:AuthService) {
    this.#titleService.setTitle(this.title);
    // iconSet singleton
    this.#iconSetService.icons = { ...iconSubset };
    this.#colorModeService.localStorageItemName.set('WebAppByPM-theme-default');
    this.#colorModeService.eventName.set('ColorSchemeChange');
  }

  ngOnInit(): void {

//newly added
debugger
    const token = localStorage.getItem('token');
  const expiresAt = localStorage.getItem('expiresAt');

  if (token && expiresAt) {
    const isExpired = new Date(expiresAt).getTime() < new Date().getTime();
    if (isExpired) {
      this.authService.logout();
    }
  }






    this.#router.events.pipe(
        takeUntilDestroyed(this.#destroyRef)
      ).subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter(theme => ['dark', 'light', 'auto'].includes(theme)),
        tap(theme => {
          this.#colorModeService.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  
}
