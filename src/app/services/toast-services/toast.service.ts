import { Injectable, TemplateRef } from '@angular/core';

export interface Toast {
  textOrTpl: string | TemplateRef<any>;
  classname?: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  // Show a new toast message.
  show(textOrTpl: string | TemplateRef<any>, options: Partial<Toast> = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Remove a toast message.
  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
