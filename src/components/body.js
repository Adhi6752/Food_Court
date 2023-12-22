import { RestrauntList } from "./config";
import { useEffect, useState } from "react";
import shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterdata(searchInput,restaurants){
    const data =  restaurants.filter((restaurants) => 
    restaurants.data.name.toLowerCase().includes(searchInput));
    return data;
}
export const Restrauntcard = ({id,name,cuisines,cloudinaryImageId,lastMileTravelString,slugs}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}
            </h3>
            <h4>{slugs.city}</h4>

        </div>
    )
}




const Body = () => {
    const [searchInput,setSearchInput] = useState("");
    const [restaurants,setRestaurants] = useState([]);
    const [allrestaurants,setAllRestaurants] = useState(null);
    useEffect(() => {
        getRestraurants();
    },[]);
    function getRestraurants(){
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&page_type=DESKTOP_WEB_LISTING")
        .then(response => {
            return response.json()
        })
        .then(json => {
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
            setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        })
       
    } 
    return !restaurants ?
    <div className="list">
           {
            Array(30).fill("").map((e,index) => {
                return <div className="shimmer-card" key={index}></div>
            })
            
            }
    </div>
    : (
    <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchInput}
            onChange={(e) => {
                setSearchInput(e.target.value);
            }}/>
            <button className="search-btn"
            onClick = {() => {
                const data = filterdata(searchInput.toLowerCase(),allrestaurants);
                setRestaurants(data);
                {console.log(data.name);}
            }} >Search</button>
        </div>
        <div className="list">
            {console.log(restaurants)}
            {
                
                restaurants?.map((restaurant) => {
                    return <Link to={"/restruant/"+restaurant.data.id} key={restaurant?.data?.id}><Restrauntcard {...restaurant?.data}  /></Link>
                })
            }
        </div>
    </>
    );
};

export default Body;