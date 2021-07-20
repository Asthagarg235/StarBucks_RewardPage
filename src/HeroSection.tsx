import React from "react";
interface Props{
}
const HeroSection: React.FC<Props> = (props) => {
  return (
    <div>

        
    <div className="aspect-w-3 aspect-h-4 mb-72">
        <div className=" bg-cover bg-primary-200 bg-star  ">
        <div className="flex flex-col justify-center m-auto pl-6.4 pr-6.4 pt-12 pb-12 text-center">
        <h1 className="font-semibold text-xl">FREE COFFEE <br /> IS A TAP AWAY</h1>
        <p className="pt-3 pb-5">Join now to start earning Rewards.</p>
        
        <a className="underline hover:no-underline mt-3">Or join online</a>
      </div>
      
      
</div>


</div>

    
     
        
    </div>
);
};

HeroSection.defaultProps = {
}

export default HeroSection;