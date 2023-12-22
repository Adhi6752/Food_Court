/*** 
 * HMR - Hot Module Reloading
 * File Watcher algorithm - c++
 * 
 *
 * BUNDLING
 *  what is .parcel-cache and dist-parcel want space in your project
 * MINIFY
 * Cleaning our code 
 * Dev abd production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev - npx parcel index.html --https
 * port Number two project give two port number
 * Constient Hashing Algorithm
 * what is npx and npm npx is similar to npm but execute the packag without download
 * babel-plugin-transform-remove-console
 * 
 * 
 * 
 */






import React, { Children } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./title";
import Body,{Restrauntcard} from "./body";
// import { About } from "./About";
import { Error } from "./Error";
import { Outlet } from "react-router-dom";
import { Restaurants } from "./Restraunts";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
// const About = lazy(() => import("./About"));
import { About } from "./About";
/*const heading = React.createElement(
    "h1",
    {
        id : "title",
        key : "h1",
    },
    "Heading 1"

);

const heading2 = React. createElement(
    "h2",
    {
        id : "title",
        key : "h2",
    },
    "Heading 2"

);

const container = React.createElement(
    "div",
    {
        id : "container",
    },
    [heading,heading2]

);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(container);*/
// const heading = (
//     <h2>Hello world!!!</h2>

// );
// var xyz = 10;
// const HeaderComponent = () => {
//     return (
//         <div>
//             {heading}
//             {console.log(xyz) }
//             <h2>Hello world!!!</h2>
//         </div>
//     );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent />);


const Title = () => {
    <h1>
        Food Villa
    </h1>

};







//optional chaining
/* first method
const Restrauntcard = (props) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data.cloudinaryImageId}/>
            <h2>{props.restaurant.data.name}</h2>
            <h3>{props.restaurant.data.cuisines.join(", ")}
            </h3>
            <h4>{props.restaurant.data.lastMileTravelString}</h4>
        </div>
    )
}
const Body = () => {
    return <div className="list">
    <Restrauntcard restaurant = {RestrauntList[0]}/>
    <Restrauntcard restaurant = {RestrauntList[1]}/>
    <Restrauntcard restaurant = {RestrauntList[2]}/>
    <Restrauntcard restaurant = {RestrauntList[3]}/>
    <Restrauntcard restaurant = {RestrauntList[4]}/>
    <Restrauntcard restaurant = {RestrauntList[5]}/>
    <Restrauntcard restaurant = {RestrauntList[6]}/>
    <Restrauntcard restaurant = {RestrauntList[7]}/>
    </div>
};
*/

//2nd method 





const footer = () => {
    return (
        <div>
        <h1>footer</h1>
        </div>
    );
};
const AppLayout = () => {
     return (
        /**
        Header
         -logo
         -nav items
        Body
         -Search bar
         -Restraunt list
           -Image
           -name
           -Rating
           -cusines
        Footer

        */
       <>
        <Header />
        <Outlet />
        <footer />
        </>
     );

};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />,
        children : [
    {
        path : "/about",
        element : <About />
    },
    {
        path : "/",
        element : <Body />
    },
    {
        path : "/restruant/:id",
        element : <Restaurants />
    }
]
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);