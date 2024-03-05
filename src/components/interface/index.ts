export interface IProduct {
    id?:string | undefined,
      title:string ,
      des:string,
      imageUrl:string ,
      price:string 
}

export interface IFormInput {
  id: string;
  name: 'title' |'des'|'price' |'imageUrl'; 
  label: string;
  type: string;
}