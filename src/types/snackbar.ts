export interface SnackbarStateProps {
  open: boolean;
  message: string;
  type: "error" | "info" | "success" | "warning";
}
