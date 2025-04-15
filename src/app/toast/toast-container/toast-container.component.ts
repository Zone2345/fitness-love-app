import { Component, TemplateRef } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Toast,
  ToastService,
} from '../../services/toast-services/toast.service';

@Component({
  selector: 'app-toasts',
  imports: [NgbToastModule],
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>
      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  // Place the toast container in a fixed position
  host: { class: 'toast-container position-fixed bottom-0 end-0 p-3' },
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: Toast): boolean {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
