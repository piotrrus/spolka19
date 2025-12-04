export interface ClothesApi {
     data: Clothe[];
     type: string;
     success: boolean;
}

export interface Clothe {
     id: number;
     name: string;
}
