export interface MostPopularFabricApi {
     data: MostPopularFabric[];
     type: string;
     success: boolean;
}

export interface MostPopularFabric {
     contractor: string;
     ilosc: number;
     materialNr: string;
}

export interface MostPopularFabrics {
     attributes: MostPopularFabric[];
}

export interface MostPopularClothesApi {
     data: MostPopularClothe[];
     type: string;
     success: boolean;
}

export interface MostPopularClothe {
     article: string;
     ilosc: number;
     name: string;
}
