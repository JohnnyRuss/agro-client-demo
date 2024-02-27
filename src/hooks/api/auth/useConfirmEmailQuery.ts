import { useEffect } from "react";

import { authStore } from "@/store";
import useConfirmEmailForm from "@/utils/validations/auth/confirmEmailSchema";

export default function useConfirmEmailQuery() {
  const form = useConfirmEmailForm();

  const status = authStore.use.status();
  const confirmEmail = authStore.use.confirmEmail();
  const cleanUpStatus = authStore.use.cleanUpStatus();

  const onConfirmEmail = form.handleSubmit(async (values) => {
    await confirmEmail({ pin: +values.pin });

    form.reset();
  });

  useEffect(() => {
    return () => {
      cleanUpStatus();
    };
  }, []);

  return { form, onConfirmEmail, status };
}
