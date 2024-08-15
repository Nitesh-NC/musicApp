import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="w-full ">
        <div className="flex">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};

export default Navbar;
