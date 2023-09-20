import { CorsOptions } from "cors";

class Cors {
  public readonly corsOptions: CorsOptions;
  private readonly whiteList: string[];

  constructor() {
    this.whiteList = ["http://localhost:3333"];

    this.corsOptions = {
      origin: (origin, callback) => {
        if ((origin && this.whiteList.includes(origin)) ?? !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    };
  }
}

export const corsOptions = new Cors().corsOptions;
