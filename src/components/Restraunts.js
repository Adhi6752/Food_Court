import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";


// function getRestraurants () {
//     fetch(https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6868159&lng=83.2184815&restaurantId=363713&submitAction=ENTER)
// }
export const Restaurants = () => {
    const { id } = useParams();
    // const {restaurants,setRestaurants} = useState([]);
    // useEffect(() => {
    //     getRestaurants();
    // },[])
    return (
        <h1>{ id }</h1>
    );
};
