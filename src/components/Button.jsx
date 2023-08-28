import PropTypes from "prop-types";

const Button = ({ content, className }) => {
  className += " button";
  return (
    <button className={className}>
      <p>{content }</p>
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
