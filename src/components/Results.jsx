import { calculateInvestmentResults } from "../util/investment";

export function Result({ input }) {
  const result = calculateInvestmentResults(input);
  console.log("result", result);
  return <p>Results...</p>;
}
