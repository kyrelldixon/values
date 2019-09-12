import React from 'react';

const Button = ({ disabled, onClick, primary, secondary, children, ...rest }) => {
  if (primary && secondary) {
    throw new Error("Button can only be primary or secondary");
  }
  else if (!primary && !secondary) {
    primary = true;
  }
  
  const primaryClassNames = primary ? "bg-purple-600 text-white" : "";
  const secondaryClassName = secondary ? "border border-purple-600 text-purple-600" : "";
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