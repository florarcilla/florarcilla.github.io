// src/app/core/guards/unsaved-enquiry.guard.ts

import { CanDeactivateFn } from '@angular/router';
import { EnquireComponent } from '../../pages/enquire/enquire.component';

export const unsavedEnquiryGuard: CanDeactivateFn<EnquireComponent> = (component) => {
  if (!component.hasUnsavedMessage()) return true;
  return window.confirm(component.leaveConfirmMessage);
};
