import { WeatherStateProps } from "./weather";
import { SnackbarStateProps } from "./snackbar";

export interface DefaultRootStateProps {
  weather: WeatherStateProps;
  snackbar: SnackbarStateProps;
}
