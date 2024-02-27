import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useSignInQuery } from "@/hooks/api/auth";

import AuthLayout from "./components/AuthLayout";
import * as Form from "@/components/Layouts/Form";
import SubmitButton from "./components/SubmitButton";
import HaveAnAccount from "./components/HaveAnAccount";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const Login: React.FC = () => {
  const { form, onAuth, status } = useSignInQuery();

  return (
    <AuthLayout onSubmit={onAuth}>
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <Form.TextField
            fieldProps={field}
            label="Email"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <Controller
        control={form.control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <Form.TextFieldPassword
            fieldProps={field}
            label="Password"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      {status.error && <ErrorMessage message={status.message} />}

      <p className="forgot-password">
        <strong>
          <Link to={PATHS.forgot_password_page}>Forgot password ?</Link>
        </strong>
      </p>

      <SubmitButton />

      <HaveAnAccount
        q="Don't have an account ?"
        a="Register"
        path={PATHS.register_page}
      />

      {status.loading && <StandSpinner />}
    </AuthLayout>
  );
};

export default Login;
