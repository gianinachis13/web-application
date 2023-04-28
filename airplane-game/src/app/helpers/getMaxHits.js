import { shipType } from "../constants/constants";

export const getMaxHits = () => {
  let maxHits = 0;
  shipType.forEach((ship) => {
    maxHits += ship.hitPoints;
  });
  return maxHits
};
