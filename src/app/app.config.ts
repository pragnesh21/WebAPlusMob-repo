import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
///
import { provideToastr } from 'ngx-toastr';
import { HttpClient, provideHttpClient,withInterceptors  } from '@angular/common/http';
// import { OwlDateTimeModule, OwlNativeDateTimeModule,OWL_DATE_TIME_FORMATS } from '@danielmoncada/angular-datetime-picker';
///import { DatepickerDirective } from './shared/datepicker.directive';


import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatter } from './shared/custom-date-formatter'; // adjust path

import { providePrimeNG } from 'primeng/config';
import aura from '@primeuix/themes/aura';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorFn } from './auth/auth.interceptor';
import { provideServiceWorker } from '@angular/service-worker';



// export const MY_NATIVE_FORMATS = {
//   fullPickerInput: 'DD/MM/YYYY',
//   datePickerInput: 'DD/MM/YYYY',
//   timePickerInput: 'HH:mm',
//   monthYearLabel: 'MMM YYYY',
//   dateA11yLabel: 'DD/MM/YYYY',
//   monthYearA11yLabel: 'MMMM YYYY',
// };
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    importProvidersFrom(SidebarModule, DropdownModule,HttpClient,NgbModule ,ToastModule
       ),
    IconSetService,
    provideHttpClient( withInterceptors([AuthInterceptorFn])),
    provideAnimationsAsync(),  
    //provideToastr()   
      provideToastr({           // <-- Global Toastr configuration
      positionClass: 'toast-top-right', // toast-top-right bottom full width (mobile-friendly)
      timeOut: 5000,                             // auto close after 4s
      progressBar: true,                          // show progress bar
      closeButton: true,                          // show close button
      newestOnTop: true,                          // new toast on top
      preventDuplicates: true                     // prevent duplicate messages
    })  
       , { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter } // global formatter
  
  ,providePrimeNG({
            theme: {
                preset: aura ,
                options: {
            darkModeSelector: '[data-coreui-theme="dark"]' // automatically switch
        }
            }
        }),
        MessageService, provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })                               
  
      ]

  
};
