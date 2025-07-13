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
  const baseClasses = "bg-white dark:bg-gray-900 rounded-xl transition-all duration-300";
  
  const variantClasses = {
    default: "shadow-md hover:shadow-lg",
    elevated: "shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    outlined: "border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600",
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