import { useState } from "react";

export const useShowPassword = () => {
  const [show, setShow] = useState<boolean>(true);
  const toggleShow = () => setShow((p) => !p);

  const [confirm, setConfirm] = useState<boolean>(true);
  const toggleShowConfirm = () => setConfirm((p) => !p);
  return { show, toggleShow, confirm, toggleShowConfirm };
};
