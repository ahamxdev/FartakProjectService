export interface IFirstBuyCourseForm {
  countOfCustomers: number;
  firstName: string;
  forWho: string;
  goal: string;
  language: string;
  lastName: string;
  level: string;
  // region: string;
  region: "" | "iran" | "outOfIran";
  city: string
  address: string
}
