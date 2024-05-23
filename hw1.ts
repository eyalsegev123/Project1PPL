import { any, map } from "ramda";
import { filter } from "ramda";
import { reduce } from "ramda";

type Product = {
    name: string;
    price: number;
    discounted: boolean;
}

const DiscountedProductAveragePrice = (inventory: Product[]) : number => 
    (           
        inventory.length === 0 ? 0 : (((inventory.filter((item: Product) => item.discounted))
        .reduce((sum : number, item : Product) => sum + item.price , 0))
        / (inventory.filter((item: Product) => item.discounted)).length)
    );

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
    let discountedPriceSum = 0;
    let discountedProductsCount = 0;
    for (const product of inventory) {
        if (product.discounted) {
            discountedPriceSum += product.price;
            discountedProductsCount++;
        }
    }
    if (discountedProductsCount === 0) {
        return 0;
    }
    return discountedPriceSum / discountedProductsCount;
}

const a = <T>(x : T[] , y : (value: T) => boolean) : boolean => x.some(y);

const b = (x : number[]) => (x.reduce((acc : number, cur : number) : number  => acc + cur), 0);

const c = <T>(x : boolean, y : T[]) : T => x ? y[0] : y[1]; 

const d = <T, S>(f: (value: T) => S, g: (value: number) => T) => (x : number) : S => f(g(x+1));