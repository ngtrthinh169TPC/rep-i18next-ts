import "i18next";
// import { resources } from "../i18n"; // seems your exported resources are not the same as importing directly here
import resources from "./locale/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources.en;
  }
}
