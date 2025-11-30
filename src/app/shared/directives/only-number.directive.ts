import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumberOnlyDirective implements OnChanges {

  constructor(private el: ElementRef<HTMLInputElement>) { }

  @HostListener('input', ['$event'])
  public ngOnChanges(): void {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
  }
}
