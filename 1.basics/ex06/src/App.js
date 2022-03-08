import React from "react";

// 하나의 컴포넌트 
const App = function() {
    // const App = document.createElement('h1');
    // App.textContent = 'Hello World';

    const message = 'Hello World';

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );

    //React.createElement('div', React.createElement('h1', null, 'Hello React'), null);
}

export { App }