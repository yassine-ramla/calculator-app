/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { formulateInput } from "../utils/helper";
import { memo } from "react";

const InputScreen = ({ input }) => {
  return (
    <section className="result-screen">
      <p id="result" className="result">
        {formulateInput(input)}
      </p>
    </section>
  );
};

InputScreen.propTypes = {
  input: PropTypes.string.isRequired,
};

export default memo(InputScreen);
