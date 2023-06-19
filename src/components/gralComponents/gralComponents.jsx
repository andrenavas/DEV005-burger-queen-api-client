
export const Input = ({value,placeholder,className, onChange }) => {
  return (
    <input  type="text" value={value}  placeholder = {placeholder} className={className} onChange={onChange} required/>
  )  
};

export const Button = ({onClick,text,className,}) => {
  return (
    <>
   <button onClick={onClick} className={className}>{text}</button>
    </>
  );
};