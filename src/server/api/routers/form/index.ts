import { createTRPCRouter, publicProcedure } from "../../trpc";
import { formSchema } from "@/server/api/routers/form/schemas";

export const formRouter = createTRPCRouter({
  submit: publicProcedure.input(formSchema).mutation(({ input }) => {
    return {
      data: input,
    };
  }),
});
