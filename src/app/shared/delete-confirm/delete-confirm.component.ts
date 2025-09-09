import { Component, EventEmitter, Output } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  standalone: true,
  imports:[
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent
  ]
})
export class DeleteConfirmComponent {
  visible = true; 
  itemName = 'this item';

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
    this.visible = false;
  }

  onCancel() {
    this.cancel.emit();
    this.visible = false;
  }

  onDismiss() {
    this.cancel.emit();
    this.visible = false;
  }
}
