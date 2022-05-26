import { nanoid } from "nanoid";

import { ScenarioData } from "./interfaces/ScenarioData";
import { ScenarioRow } from "./interfaces/ScenarioRow";

export class ScenarioBuilder {
  constructor(
    private data: ScenarioData = {
      users: [],
      products: [],
      purchases: [],
    }
  ) {}

  addUser(
    firstName: string,
    lastName: string,
    age: number,
    country: string
  ): string {
    const id = nanoid();
    this.data.users.push({
      id,
      firstName,
      lastName,
      age,
      country,
    });
    return id;
  }

  addProduct(name: string, price: number): string {
    const id = nanoid();
    this.data.products.push({
      id,
      name,
      price,
    });
    return id;
  }

  addPurchase(
    userId: string,
    productId: string,
    quantity: number,
    location: string,
    time: string
  ): string {
    const id = nanoid();
    this.data.purchases.push({
      id,
      userId,
      productId,
      quantity,
      location,
      time,
    });
    return id;
  }

  clone(): ScenarioBuilder {
    return new ScenarioBuilder(this.data);
  }

  finish(): ScenarioRow[] {
    return this.data.purchases.map((purchase) => {
      const user = this.data.users.find((user) => user.id === purchase.userId);
      const product = this.data.products.find(
        (product) => product.id === purchase.productId
      );
      if (!user || !product) {
        throw new Error("Failed to finish scenario");
      }
      return {
        ...purchase,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        userAge: user.age,
        userCountry: user.country,
        productName: product.name,
        productPrice: product.price,
      };
    });
  }
}
