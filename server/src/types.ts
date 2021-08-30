import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request, Response } from "express";
import session from "express-session";

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}

export type MyContext = {
    em: EntityManager<IDatabaseDriver<Connection>>;
    req: Request & {session: session.Session & Partial<session.SessionData>};
    res: Response;
}