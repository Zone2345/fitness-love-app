export interface Products {
  id: string;
  naziv: string;
  opis: string;
  kategorija: string;
  cena: number;
  slika: string;
}

export interface UpsertBasketItemDto {
  // Define the properties of each basket item. For example:
  id: string;
  kolicina: number;
  // Add other properties as needed
}

export interface UpsertBasketDto {
  items: UpsertBasketItemDto[];
}
