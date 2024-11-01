import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

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
    return (
        <div>
            <Navbar/>
            <ProductCard/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);