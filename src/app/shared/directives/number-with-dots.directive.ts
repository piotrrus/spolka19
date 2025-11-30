import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
     selector: '[appNumberWthDots]',
})
export class NumberWithDotsDirective implements OnChanges {
     constructor(private el: ElementRef<HTMLInputElement>) {}

     @HostListener('input', ['$event'])
     public ngOnChanges(): void {
          const initialValue: string = this.el.nativeElement.value;
          this.el.nativeElement.value = initialValue.replace(/[^0-9.]*/g, '');
     }
}
