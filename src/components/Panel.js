import classNames from "classnames";
function Panel({ children, ...rest }) {
  const classes = classNames(
    rest.className,
    "border rounded p-3 shadow bg-white w-full"
  );

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
