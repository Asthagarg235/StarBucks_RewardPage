import React from "react";
interface Props{
}
const Started: React.FC<Props> = (props) => {
  return (
    <div className="container___2baPn">
        
        <div className = "multiThumbnailsRow___3nhNw">
                <div className="flex size12of12 md-size4of12 md-pb0 md-mx4 pb5">
                    <div className = "image___1wlkl text-center flex-shrink-none pr3 m0">
                        <img className = "sb-imageFade_shadow pt-7" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" ></img>
                    </div>
                    <div>
                        <h2 className="sb-heading text-semibold pt-7" >Download the Starbucks® app</h2>
                        <p className="pt-3 text-xs ">
                            <a href="https://starbucks.app.link/VLa2I3inh9" className="color-greenDarkApron">Join in the app </a>
                            to get access to the full range of Starbucks® Rewards
                            benefits. You can also
                            <a href="/account/create" className="text-rimary-400"> join online</a>
                            .
                        </p>
                    </div>
                </div>
                <div className="flex size12of12 md-size4of12 md-pb0 md-mx4 pb5">
                    <div className="column image___1wlkl text-center flex-shrink-none pr3 m0">
                        <img className = "sb-imageFade_shadow pt-7" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" ></img>
                    </div>
                    <div>
                        <h2 className="text-bold pt-7" >Order and pay how you’d like</h2>
                        <p className="pt-3 text-xs">
                            "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways."
                            <a href="#waystopay" className="color-greenDarkApron"> Learn how</a>
                        </p>

                    </div>
                </div>
                <div className="flex size12of12 md-size4of12 md-pb0 md-mx4 pb5">
                    <div className="column image___1wlkl text-center flex-shrink-none pr3 m0">
                        <img className = "sb-imageFade_shadow pt-7" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" ></img>
                    </div>  
                    <div>
                        <h2 className="text-bold pt-7" >Earn Stars, get Rewards</h2>
                        <p className="pt-3 text-xs">
                            "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
                        </p>
                    </div>
                </div>
                
                
        </div>
        
    </div>
);
};

Started.defaultProps = {
}

export default Started;