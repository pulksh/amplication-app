import { registerEnumType } from "@nestjs/graphql";

export enum EnumProductStatus {
  Active = "active",
  InActive = "inactive",
}

registerEnumType(EnumProductStatus, {
  name: "EnumProductStatus",
});
