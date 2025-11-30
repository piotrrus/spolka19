import { Assorts } from '@shared/enums/assorts.enum';

export function isCoat(assortId: number): boolean {
     return assortId === Assorts.COAT;
}

export function hasTrousers(assortId: number): boolean {
     return assortId < 6 || assortId === Assorts.TROUSERS;
}

export function hasVest(assortId: number): boolean {
     return assortId === 2 || assortId === 4 || assortId === 7;
}
