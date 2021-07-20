import React from "react";
interface Props{
}
const TabTitle: React.FC<Props> = (props) => {
  return (
    <div className="size12of12 md-offset2of12 md-size8of12 lg-offset3of12 lg-size6of12 text-center pt-24 pb-5">
            <h1 className="font-semibold text-lg">Get your favorites for free</h1>
           
        </div>
);
};

TabTitle.defaultProps = {
}

export default TabTitle;