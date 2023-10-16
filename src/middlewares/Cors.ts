import { CorsOptions } from "cors";

class Cors {
  public readonly corsOptions: CorsOptions;
  private readonly whiteList: string[];
  private readonly NODE_ENV = process.env.NODE_ENV;

  constructor() {
    this.whiteList = this.getOrigins();

    this.corsOptions = {
      origin: (origin, callback) => {
        if ((origin && this.whiteList.includes(origin)) ?? !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      allowedHeaders: ["Content-Type", "accept", "Authorization"],
    };
  }

  private getOrigins() {
    console.log(this.NODE_ENV);

    if (this.NODE_ENV === "development") {
      return ["http://localhost:3333", "http://localhost:5173"];
    }

    if (this.NODE_ENV === "production") {
      return [
        "https://client-paper-notes.vercel.app",
        "https://api-paper-notes.onrender.com",
      ];
    }

    return [];
  }
}

export const corsOptions = new Cors().corsOptions;
