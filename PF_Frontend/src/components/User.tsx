import { useEffect, useRef, useState } from "react";
import OptionAccount from "./OptionAccount";

const User = () => {
  // Hooks para manejar si se muestran los modales o no
  const [modalOptions, setModalOptions] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModalOptions(false);
    }
  };

  useEffect(() => {
    if (modalOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOptions]);
  return (
    <>
        <li className="links__item item__user" onClick={() => setModalOptions(!modalOptions)}>
          <img src="../../public/user.png" alt="Logo" />
        {modalOptions ? <div ref={modalRef}>
            <OptionAccount />
          </div> : null}
        </li>
    </>
  );
};

export default User;
