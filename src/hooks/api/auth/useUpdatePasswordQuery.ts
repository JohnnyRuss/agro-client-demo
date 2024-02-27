import { useEffect } from "react";

import { authStore } from "@/store";
import useUpdatePasswordForm from "@/utils/validations/auth/updatePasswordSchema";

export default function useUpdatePasswordQuery() {
  const form = useUpdatePasswordForm();

  const status = authStore.use.status();
  const cleanUpStatus = authStore.use.cleanUpStatus();
  const updatePassword = authStore.use.updatePassword();

  const onUpdatePassword = form.handleSubmit(async (values) => {
    await updatePassword({
      password: values.password,
      confirm_password: values.confirm_password,
    });

    form.reset();
  });

  useEffect(() => {
    return () => {
      cleanUpStatus();
    };
  }, []);

  return { form, onUpdatePassword, status };
}
