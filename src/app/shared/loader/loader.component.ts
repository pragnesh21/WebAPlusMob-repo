import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './loader.service';
import { SpinnerComponent } from '@coreui/angular';
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  template: `
    <div *ngIf="loaderService.loading$ | async" class="loader-overlay">
      <c-spinner color="primary"></c-spinner>
    </div>
  `,
  styles: [`
    .loader-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.6);
      z-index: 9999;
    }
  `]
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}
}
