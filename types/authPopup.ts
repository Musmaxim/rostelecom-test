import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

export interface IInputs {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpFx {
  password: string;
  email: string;
  isOAuth?: boolean;
  name?: string;
}

export interface IAuthSideProps {
  toggleAuth: () => void;
  isSideActive: boolean;
}

export interface IAuthInput {
  register: UseFormRegister<IInputs>;
  errors: Partial<FieldErrorsImpl<IInputs>>;
}

export interface INameErrorMessageProps {
  errors: FieldErrorsImpl<IInputs & { [name: string]: string }>;
  fieldName: string;
  className?: string;
}
