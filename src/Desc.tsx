import React from "react";
interface Props{
}
const Desc: React.FC<Props> = (props) => {
  return (
    <div className="size12of12 md-offset2of12 md-size8of12 lg-offset3of12 lg-size6of12 text-center">
            <h1 className="font-semibold text-lg">Getting started is easy</h1>
            <p className="pt-3 text-xs text-center">Earn Stars and get rewarded in a few easy steps</p>
        </div>
);
};

Desc.defaultProps = {
}

export default Desc;