import { Product } from "./Product";
import { User } from "./User";
import { Purchase } from "./Purchase";

export interface ScenarioData {
  users: User[];
  products: Product[];
  purchases: Purchase[];
}
