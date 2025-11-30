export function isEmptyObject(obj: unknown): boolean {
     return obj && Object.keys(obj).length !== 0 ? true : false;
}
