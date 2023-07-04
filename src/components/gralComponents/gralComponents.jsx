import PropTypes from 'prop-types';
export const Input = ({value,placeholder,className, onChange }) => {
  return (
    <input  type="text" value={value}  placeholder = {placeholder} className={className} onChange={onChange} required/>
  )  
};

export const Button = ({onClick,text,className, disabled, dataTestid}) => {
  return (
    <>
   <button data-testid={dataTestid} onClick={onClick} className={className} disabled={disabled}>{text}</button>
    </>
  );
};


Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};



