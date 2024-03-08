import { ProductNameTypes } from "../types";

export interface IProduct {
    id?:string | undefined,
      title:string ,
      des:string,
      imageUrl:string ,
      price:string 
}

export interface IFormInput {
  id: string;
  name: ProductNameTypes; 
  label: string;
  type: string;
}