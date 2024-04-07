import { Provider } from "@nestjs/common";

export class ProductDTO{
    name:string
    description:string
    price:number
    barCode:string
    provider:Provider
}