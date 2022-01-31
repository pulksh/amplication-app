export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  status?: "active" | "inactive" | null;
};
