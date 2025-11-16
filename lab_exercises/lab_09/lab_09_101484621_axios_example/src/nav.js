import { useNavigate } from "react-router-dom";

export function nav(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}