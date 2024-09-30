{/* <div id="container">
    <h1>I am Heading h1</h1>
    <h2>I am Heading h2</h2>
</div> */}

const div = React.createElement('div',{id:"container"},
    [
        React.createElement('h1',{},'I am Heading h1'),
        React.createElement('h2',{},'I am Heading h2')
    ]
);

// console.log(div)  // this is a js object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
