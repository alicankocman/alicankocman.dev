import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  onClick,
  href,
}) => {
  const baseClasses = "bg-white dark:bg-gray-900 rounded-xl";
  
  const variantClasses = {
    default: "shadow-md",
    elevated: "shadow-lg",
    outlined: "border border-gray-200 dark:border-gray-700",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={`${classes} block cursor-pointer`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  if (onClick) {
    return (
      <div onClick={onClick} className={`${classes} cursor-pointer`}>
        {children}
      </div>
    );
  }
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card; 