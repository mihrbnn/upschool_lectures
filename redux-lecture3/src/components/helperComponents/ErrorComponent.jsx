import { Alert } from "react-bootstrap";
export const ErrorComponent = ({ message }) => (
  <Alert variant="danger">{message}</Alert>
);
