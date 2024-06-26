import { loginCheckFx, singInFx } from "@/api/auth";
import { IUser } from "@/types/user";
import { createDomain, sample } from "effector";
import { $auth } from "./auth";

const user = createDomain();

export const loginCheck = user.createEvent<{ jwt: string }>();

export const $user = user
  .createStore<IUser>({} as IUser)
  .on(loginCheckFx.done, (_, { result }) => result);

sample({
  clock: loginCheck,
  source: $user,
  fn: (_, { jwt }) => ({
    jwt,
  }),
  target: loginCheckFx,
});
