import React from "react";

// mui components
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

// redux
import { useSelector, useDispatch } from "react-redux";

// service
import { closeSnackbar } from "services/store/slices/snackbar";

// types
import { DefaultRootStateProps } from "types";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector(
    (state: DefaultRootStateProps) => state.snackbar
  );

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
