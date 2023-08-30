import PropTypes from "prop-types";
import { formulateInput } from "../utils/helper";

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

export default InputScreen;
