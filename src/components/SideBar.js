import Link from "./Link";

function SideBar() {
  const links = [
    { path: "/", label: "Dropdown" },
    { path: "/accordion", label: "Accordion" },
    { path: "/buttons", label: "Button" },
    { path: "/modal", label: "Modal" },
    { path: "/table", label: "Table" }
  ];

  const linkElements = links.map((link) => (
    <Link activeClassName='font-bold border-l-4 border-blue-500 pl-2' to={link.path} key={link.path}>
      {link.label}
    </Link>
  ));
  return (
    <div className="sticky top-0 items-start flex flex-col">
      {linkElements}
    </div>
  );
}

export default SideBar;
