import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <>
      <Button className="mb-5" primary>
        <GoBell />
        Click Me
      </Button>
      <Button warning rounded>
        <GoDatabase />
        Click Me
      </Button>
      <Button danger rounded>
        <GoCloudDownload />
        Click Me
      </Button>
    </>
  );
}

export default ButtonPage;
