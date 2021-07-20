import React from "react";
interface Props{
}
const Header: React.FC<Props> = (props) => {
  return (
    <div className="sticky top-0 flex justify-between text-white bg-primary-400 px-4 py-2 z-10">
           <h3 className="text-13 font-bold"> Starbucks® Rewards</h3>
         
    </div>
);
};

Header.defaultProps = {
}

export default Header;