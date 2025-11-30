import { NgModule } from '@angular/core';
import { FirstUpperDirective } from '@shared/directives/first-upper.directive';
import { NumberOnlyDirective } from '@shared/directives/number-only.directive';
import { NumberWithDotsDirective } from '@shared/directives/number-with-dots.directive';
import { TextOnlyDirective } from '@shared/directives/text-only.directive';
import { TrimDirective } from '@shared/directives/trim.directive';

const DIRECTIVES = [
     FirstUpperDirective,
     NumberOnlyDirective,
     TrimDirective,
     TextOnlyDirective,
     NumberWithDotsDirective,
];
@NgModule({
     imports: [DIRECTIVES],
     // declarations: [DIRECTIVES],
     exports: [DIRECTIVES],
})
export class DirectivesModule {}
