import React,{Suspense, lazy, useState} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Kid from "./components/Kid";
import Men from "./components/Men";
import Women from "./components/Women";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/store";
import Cart from "./components/Cart";
import Login from "./components/Login";
// import About from "./components/About";
// import Grocery from "./components/Grocery";

// lazy loading
// code splitting
// dynamic import

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import("./components/About"));

{/* <div id="container">
    <h1>I am Heading h1</h1>
    <h2>I am Heading h2</h2>
</div> */}

// const div = React.createElement('div',{id:"container"},
//     [
//         React.createElement('h1',{},'I am Heading h1'),
//         React.createElement('h2',{},'I am Heading h2')
//     ]
// );

// console.log(div)  // this is a js object

// JSX looks exactly like HTML but it is not actually HTML is js javascriptXML
// const jsxHeading = <h1>Duniya</h1>
// //babel -> transpile JSX into react element

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);


// Bundlers

// webpack --> npx create-react-app  
// vite --> npx create @vite/latest
// Parel --> 
// npm --> 



//Navbar
 // Logo
 // Menu items




const App = () => {
    const [username,setUserName] = useState('swati kaushish')
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{name:username,setUserName}}>
        <div>
            <Navbar/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<ProductCard/>
            },
            {
                path:"/kid",
                element:<Kid/>
            },
            {
                path:'/men',
                element:<Men/>
            },
            {
                path:'/women',
                element:<Women/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/product/:id',
                element:<ProductDetails/>
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
        ],
        errorElement:<Error/>
    },
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

