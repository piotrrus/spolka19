export interface LackOfArticlesApi {
     data: LackOfArticles[];
     type: string;
     success: boolean;
}

export interface LackOfArticles {
     material_nr: string;
     moved_to_stock: string;
     order_date: string;
     quantity: string;
     contractor: string;
}
