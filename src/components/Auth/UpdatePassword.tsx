import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";

import { useUpdatePasswordQuery } from "@/hooks/api/auth";

import AuthLayout from "./components/AuthLayout";
import * as Form from "@/components/Layouts/Form";
import SubmitButton from "./components/SubmitButton";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const UpdatePassword: React.FC = () => {
  const { form, onUpdatePassword, status } = useUpdatePasswordQuery();

  const navigate = useNavigate();
  const { state } = useLocation();
  const emailIsConfirmed = state?.emailIsConfirmed;

  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    // if (!emailIsConfirmed) return navigate(PATHS.auth_page);
    setIsAvailable(true);
  }, [emailIsConfirmed]);

  return isAvailable ? (
    <AuthLayout onSubmit={onUpdatePassword}>
      <Controller
        control={form.control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <Form.TextFieldPassword
            label="Password"
            fieldProps={field}
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <Controller
        control={form.control}
        name="confirm_password"
        render={({ field, fieldState: { error } }) => (
          <Form.TextFieldPassword
            fieldProps={field}
            label="Confirm Password"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      {status.error && <ErrorMessage message={status.message} />}

      <SubmitButton />

      {status.loading && <StandSpinner />}
    </AuthLayout>
  ) : (
    <></>
  );
};

export default UpdatePassword;
