import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function modalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClick} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal actionBar={actionBar} onClose={handleClick}>
      <div className="p-10 bg-white">
        <h1 className="text-2xl">Modal</h1>
        <p className="mt-4">This is a modal</p>
      </div>
    </Modal>
  );
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        {" "}
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default modalPage;
