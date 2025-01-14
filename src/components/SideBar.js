import Link from "./Link";

function SideBar() {
  const links = [
    { path: "/", label: "Dropdown" },
    { path: "/accordion", label: "Accordion" },
    { path: "/buttons", label: "Button" },
  ];

  const linkElements = links.map((link) => (
    <Link to={link.path} key={link.path}>
      {link.label}
    </Link>
  ));
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {linkElements}
    </div>
  );
}

export default SideBar;
