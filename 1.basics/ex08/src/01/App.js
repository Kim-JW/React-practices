import React from "react";

const App = function() {
    return (
        <div>
        <h2>App01</h2>
        <p>JSX</p>
        {
            // 1. 속성은 Camel Case
        }
        <input type = 'text' maxLength='10' />
        {/*
            2. Element는 꼭 닫는다.
            오류) <br>, <hr>, <input type='text'>, <img src=''>
        */}
        <br/>
        <hr/>
        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'/ >
        {/*
            3. 속성 이름은 DOM API 기반이다. (HTML Tag 기반 x)
                <div id = 'box' class= 'box'>...</div>
                document.getElementById('box')
         */}
        </div>
    );
}

export default App;