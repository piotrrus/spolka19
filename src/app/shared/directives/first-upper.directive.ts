import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
     selector: '[appFirstUpper]',
})
export class FirstUpperDirective {
     constructor(private el: ElementRef<HTMLInputElement>) {}

     @HostListener('blur')
     public onBlur(): void {
          if (this.el.nativeElement.value) {
               const textValue = this.el.nativeElement.value;
               this.el.nativeElement.value = textValue[0].toUpperCase() + textValue.slice(1);
          }
     }
}
