import { restaurantList } from "../Data & Links/Constants";
import RestaurantCard from "../Component/RestaurantCard";
import { useState } from "react";


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));

    return filterData;
}


// Body component for body section: It contains all restaurant Cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard Component as props with unique key as index 

const Body = () => {
    // useState: To Create a state variable, searchText is local state variable
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Serach a restaurant you want...." value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                <button className="search-btn" onClick={() => {
                    // Filter Data
                    const data = filterData(searchText, restaurants);
                    // update the state of restaurants list
                    setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </>
    );
};


export default Body;