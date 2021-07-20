import React, {Dispatch,useState,SetStateAction} from "react";
interface Props{
}
const Tab: React.FC<Props> = (props) => {
    const TabTitles = [25, 50, 150, 200,400];
    const [selectedIndex , setSelectedIndex] = useState(0);
    const positionClass = selectedIndex == 0 ? "left-0" : "left-" + selectedIndex + "/4";
    const width = 100 / TabTitles.length;
  return (
    <div className="font-sans">
        <div className="bg-primary-100">
            <div className=" max-w-md mx-auto relative">
                <div className="flex text-xl text-bold">
                    {TabTitles.map((title,index) =>(
                        <div className="flex-1 px-2 py-4 text-center cursor-pointer" onClick = {() => setSelectedIndex(index)}>
                            {title}
                            <span className="text-xs text-gold">★</span>
                        </div>

                    ))}
                </div>
                <div className="absolute h-1 bg-primary-400 ease-in-out duration-500" style = {{width : width+"%", left : (width * selectedIndex) + "%"}}>

                </div>
            </div>

        </div>
        <div className="bg-primary-200"></div>

    </div>  
);
};

Tab.defaultProps = {
}

export default Tab;