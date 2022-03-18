import React from 'react';

import './assets/Form.css';

export default function Form() {
        const onSubmit = function(e) {
            e.preventDefault();

            // 딱히 Validation이 필요 없으면 .....
            console.log(e.target.email.value, ':', e.target.password.value);

            // ajax
        
    }

    return (
        <form
            id= "loginForm"
            name="loginForm"
            method="post"
            onSubmit={onSubmit}
            action="/do/not/post">로그인</form>
    );
}