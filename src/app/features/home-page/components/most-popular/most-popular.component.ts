import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MostPopularAssort } from '@features/assorts-page/models/assorts.interface';
import { MostPopularFabric } from '@features/stock-page/models/most-popular-fabric.interface';

@Component({
     selector: 'app-most-popular',
     templateUrl: './most-popular.component.html',
     styleUrls: ['./most-popular.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostPopularComponent {
     @Input() mostPopularFabrics: MostPopularFabric[] | null = [];
     @Input() mostPopularAssorts: MostPopularAssort[] | null = [];
}
