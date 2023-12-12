import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const dataSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
  price: z.string(),
  rate: z.number(),
  date: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  marketCapa: z.string(),
  transaction: z.string(),
  like: z.number(),
});

export type Data = z.infer<typeof dataSchema>;
