import { Condition } from "hooks/useItemDetail";

export const getConditionLabel = (condition: Condition) => {
  if (condition === Condition.NEW) {
    return "Nuevo";
  }
  return condition;
};
