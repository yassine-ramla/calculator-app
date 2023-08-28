import PropTypes from "prop-types";

const ResultScreen = ({ result }) => {
  return (
    <section className="result-screen">
      <p id="result" className="result">
        {result ?? "3882910"}
      </p>
    </section>
  );
};

ResultScreen.propTypes = {
  result: PropTypes.number.isRequired,
};

export default ResultScreen;
