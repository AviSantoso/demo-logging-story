import { ScenarioBuilder } from "./ScenarioBuilder";

export function getScenarios() {
  const scenarios = [];
  const builder = new ScenarioBuilder();

  const avi = builder.addUser("Avi", "Santoso", 23, "Australia");
  const barbara = builder.addUser("Barbara", "Franklin", 18, "Australia");
  const benOld = builder.addUser("Benjamin", "Liskov", 35, "Indonesia");
  const benYoung = builder.addUser("Benjamin", "Liskov", 26, "Indonesia");
  const megan = builder.addUser("Megan", "Malicious", 42, "Austria");

  const redCandle = builder.addProduct("Red Candle", 30);
  const blueCandle = builder.addProduct("Blue Candle", 42);
  const greenCandle = builder.addProduct("Green Candle", 15);
  const yellowCandle = builder.addProduct("Yellow Candle", 72);

  const singleParty = builder.clone();
  singleParty.addPurchase(avi, redCandle, 5, "Perth", "Monday 5pm");
  singleParty.addPurchase(avi, blueCandle, 2, "Perth", "Monday 3pm");
  singleParty.addPurchase(avi, blueCandle, 2, "Perth", "Tuesday 4pm");
  singleParty.addPurchase(avi, greenCandle, 10, "Perth", "Wednesday 1am");
  singleParty.addPurchase(avi, redCandle, 3, "Perth", "Thursday 2pm");
  singleParty.addPurchase(avi, blueCandle, 4, "Perth", "Thursday 7pm");
  singleParty.addPurchase(avi, redCandle, 1, "Perth", "Friday 3pm");
  singleParty.addPurchase(avi, redCandle, 1, "Perth", "Friday 4pm");
  scenarios.push(singleParty.finish());

  return scenarios;
}
