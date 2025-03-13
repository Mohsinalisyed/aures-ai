import { faker } from "@faker-js/faker";

// Explicitly type the count parameter as a number
const generateAI_Agent = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: faker.number.int({ min: 1, max: 1000 }), // Generate a random ID
    name: "Agent Name", // Fixed name for the agents
    owner_address: faker.finance.ethereumAddress(), // Generate random Ethereum address
    latest_trade: `${faker.number.int({ min: 1, max: 24 })} Hours ago`, // Random number of hours ago
    earning: `$${faker.number.int({ min: 100, max: 5000 })}B`, // Random earning
    status: faker.helpers.arrayElement(["Active", "In Active"]), // Random status
  }));
};
const generateTransaction_History = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: faker.number.int({ min: 1, max: 1000 }), // Generate a random ID
    name: "Agent Name", // Fixed name for the agents
    balance: faker.number.float({ min: 100, max: 5000 }), // Generate random Ethereum address
    latest_trade_token: `${faker.number.float({ min: 1, max: 20000 })}`, // Random number of hours ago
    earning: `${faker.number.float({ min: 100, max: 5000 })}`, // Random earning
    earning_percentage: `${faker.number.float({ min: 100, max: 5000 })}%`, // Random earning
    total_earning_percentage: `${faker.number.float({ min: 100, max: 5000 })}`, // Random earning

  }));
};
// Generate 20 dummy users
export const AI_Agents = generateAI_Agent(20);
export const Transaction_History = generateTransaction_History(20);


