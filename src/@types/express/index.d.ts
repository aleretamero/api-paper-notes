declare namespace Express {
  export interface Request {
    userId?: string;
    user?: { _id: string; name: string; email: string };
  }
}
