import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, activeClassName, ...rest }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500 mb-3",
    rest.className,
    to === currentPath && activeClassName
  );
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a {...rest} className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
