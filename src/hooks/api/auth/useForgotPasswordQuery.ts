import { useEffect } from "react";

import { authStore } from "@/store";
import useForgotPasswordForm from "@/utils/validations/auth/forgotPasswordSchema";

export default function useForgotPasswordQuery() {
  const form = useForgotPasswordForm();

  const status = authStore.use.status();
  const cleanUpStatus = authStore.use.cleanUpStatus();
  const forgotPassword = authStore.use.forgotPassword();

  const onForgotPassword = form.handleSubmit(async (values) => {
    await forgotPassword({ email: values.email });

    form.reset();
  });

  useEffect(() => {
    return () => {
      cleanUpStatus();
    };
  }, []);

  return { form, onForgotPassword, status };
}
