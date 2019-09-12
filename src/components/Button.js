import React from 'react';

const Button = ({ disabled, onClick, primary, secondary, children, ...rest }) => {  
  const primaryClassNames = primary && "btn-primary";
  const secondaryClassName = secondary && "btn-secondary";
  const className = `disabled:opacity-50 disabled:cursor-not-allowed font-medium p-2 rounded ${primaryClassNames} ${secondaryClassName}`
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick ? onClick : () => {}}
      {...rest}
    >
      { children }
    </button>
  );
}

export default Button;