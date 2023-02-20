import { createTRPCRouter } from "./trpc";
import formRouter from "./routers/form/formRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  form: formRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
