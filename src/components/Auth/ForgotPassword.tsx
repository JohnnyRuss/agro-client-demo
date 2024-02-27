import { Controller } from "react-hook-form";

import { useForgotPasswordQuery } from "@/hooks/api/auth";

import SubmitButton from "./components/SubmitButton";
import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const ForgotPassword: React.FC = () => {
  const { form, onForgotPassword, status } = useForgotPasswordQuery();

  return (
    <AuthLayout onSubmit={onForgotPassword}>
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

      {status.error && <ErrorMessage message={status.message} />}

      <SubmitButton />

      {status.loading && <StandSpinner />}
    </AuthLayout>
  );
};

export default ForgotPassword;
