import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.style";

const WithSpinner = (Wrapped) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <Wrapped {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
