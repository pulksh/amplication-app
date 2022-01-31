import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductCategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
