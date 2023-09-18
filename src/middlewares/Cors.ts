import { type CorsOptions } from "cors";

class Cors {
  public readonly corsOptions: CorsOptions;
  private readonly whiteList: string[];

  constructor() {
    this.whiteList = ["*"];

    this.corsOptions = {
      origin: (origin, callback) => {
        if ((origin && this.whiteList.includes(origin)) ?? !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization", "cache"],
    };
  }
}

export const corsOptions = new Cors().corsOptions;
