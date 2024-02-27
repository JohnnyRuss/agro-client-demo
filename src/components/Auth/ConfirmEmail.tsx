import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useConfirmEmailQuery } from "@/hooks/api/auth";

import SubmitButton from "./components/SubmitButton";
import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const ConfirmEmail: React.FC = () => {
  const { form, onConfirmEmail, status } = useConfirmEmailQuery();

  const navigate = useNavigate();
  const { state } = useLocation();
  const isProcessingPasswordUpdate = state?.isProcessingPasswordUpdate;

  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    // if (!isProcessingPasswordUpdate) return navigate(PATHS.auth_page);
    setIsAvailable(true);
  }, [isProcessingPasswordUpdate]);

  return isAvailable ? (
    <AuthLayout onSubmit={onConfirmEmail}>
      <Controller
        control={form.control}
        name="pin"
        render={({ field, fieldState: { error } }) => (
          <Form.OTPField
            fieldProps={field}
            label="Pin"
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

export default ConfirmEmail;
