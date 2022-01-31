export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  status?: "active" | "inactive" | null;
  updatedAt: Date;
};
