import { Provider } from "@nestjs/common";


export class Product{
    id:number
    name:string
    description:string
    price:number
    barCode:string
    provider:Provider
}