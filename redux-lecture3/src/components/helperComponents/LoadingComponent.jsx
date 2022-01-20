import { Placeholder } from "react-bootstrap";

export const LoadingComponent = () => {
  return (
    <>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
};
