import { Injectable, ApplicationRef, ComponentRef, EnvironmentInjector, createComponent } from '@angular/core';
import { DeleteConfirmComponent } from './delete-confirm.component';

@Injectable({ providedIn: 'root' })
export class DeleteConfirmService {
  constructor(
    private appRef: ApplicationRef,
    private environmentInjector: EnvironmentInjector // ✅ Inject EnvironmentInjector
  ) {}

  confirm(itemName: string = 'this item'): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      // Dynamically create component with EnvironmentInjector
      const componentRef: ComponentRef<DeleteConfirmComponent> = createComponent(DeleteConfirmComponent, {
        environmentInjector: this.environmentInjector
      });

      // Set input
      componentRef.instance.itemName = itemName;
      componentRef.instance.visible = true;

      // Subscribe to events
      componentRef.instance.confirm.subscribe(() => {
        resolve(true);
        this.destroyModal(componentRef);
      });

      componentRef.instance.cancel.subscribe(() => {
        resolve(false);
        this.destroyModal(componentRef);
      });

      // Attach to body
      this.appRef.attachView(componentRef.hostView);
      const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
    });
  }

  private destroyModal(componentRef: ComponentRef<DeleteConfirmComponent>) {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
