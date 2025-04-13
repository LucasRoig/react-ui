import { schema } from "@repo/database";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type z from "zod";

const userTable = schema.users;

const selectUserSchema = createSelectSchema(userTable);
const insertUserSchema = createInsertSchema(userTable);

type User = z.infer<typeof insertUserSchema>;
