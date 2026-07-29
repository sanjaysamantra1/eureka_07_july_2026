import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCopyPaste]',
})
export class DisableCopyPaste {
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPatse(event: any) { // this function is called if someone tries to copy/paste on the Host element
    console.log('event ', event.type);
    event.preventDefault();
  }
}
