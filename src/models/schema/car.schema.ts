import { Schema, model } from "mongoose";

interface ICar {
    name: string;
    price: number;
    brand: string;
    description: string
}

const carSchema = new Schema<ICar>({
    name: String,
    price: Number,
    brand: String,
    description: String
})

export const Car = model<ICar>('Car', carSchema);
