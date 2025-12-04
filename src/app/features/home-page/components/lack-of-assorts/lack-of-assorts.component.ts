import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LackOfArticles } from '@features/stock-page/models/lack-articles.interface';

@Component({
     // standalone: false,
     selector: 'app-lack-of-assorts',
     templateUrl: './lack-of-assorts.component.html',
     styleUrls: ['./lack-of-assorts.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule],
})
export class LackOfAssortsComponent {
     @Input() lackOfAssorts: LackOfArticles[] | null = null;
     @Output() public showLackOfAssorts = new EventEmitter<boolean>();

     public showMore(): void {
          this.showLackOfAssorts.emit(true);
     }
}
