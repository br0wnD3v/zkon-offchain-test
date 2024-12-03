import { ZKON } from "zkon-sdk";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.ZKON_API_KEY || "";
const oracle = process.env.ZKON_URL || "";

const zkon = new ZKON(apiKey, oracle);

async function main() {
  try {
    console.log(
      await zkon.request({
        method: "GET",
        baseURL: "api.binance.com/api/v3/avgPrice?symbol=BTCUSDT",
        path: "price",
      })
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
