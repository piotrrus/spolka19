export interface AssortsApi {
     data: AssortList[];
     type: string;
     success: boolean;
}

export interface AssortList {
     id: number;
     name: string;
}

export interface MostPopularAssortsApi {
     data: MostPopularAssort[];
     type: string;
     success: boolean;
}

export interface MostPopularAssort {
     article: string;
     ilosc: number;
     name: string;
}
