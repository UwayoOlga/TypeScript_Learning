interface Product {
    id: number;
    name: string;
}

interface Product{
    price: number;
    description?: string;
    getFormattedPrice(): String;
}
declare global{
    interface Window {
        myGlobalAppConfig: {
            apiUrl: string;
        };
    }
}
const myProduct: Product = {
    id :101,
    name: "Phone",
    price: 100.50,
    description: "Iphone7",
    getFormattedPrice() {
        return`$${this.price.toFixed(1)}`;
    }
};
console.log(myProduct);
export {};