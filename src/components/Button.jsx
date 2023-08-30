import PropTypes from "prop-types";

const Button = ({ content, className, updateInput }) => {
  className += " button";
  return (
    <button className={className} onClick={() => updateInput(content)}>
      <p>{content}</p>
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default Button;
