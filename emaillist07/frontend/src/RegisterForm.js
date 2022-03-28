import React from 'react'
import styles from './assets/scss/RegisterForm.scss';

const RegisterForm = ({callback}) => {
  return (
    <form 
      className={styles.RegisterForm}
      onSubmit={e => {
        e.preventDefault();

        [{n: 'fistName', v:'마'}, {}, {}]

        try {
          const result = Array.from(e.target, input => {
            // simple validation
            if(input.value === ''){
              throw new Error(`${input.placeholder}이 비어있습니다.`);
            }
            return {n: input.name, v: input.value};
          })
            .filter(o => o.name !== '')
            .reduce((res, {n, v}) => {
              res[n] = v;
              return res;
            }, {})
  
          console.log(result);
        }catch(err){
          console.log(err.message);
        }
        

        // const newEmail = {
        //   firstName: e.target.firstName.value, 
        //   lastName: e.target.lastName.value, 
        //   email: e.target.email.value
        // };

        // callback(newEmail);
      }}>
                <input type={'text'} name={'firstName'} placeholder="성" className={styles.InputFirstName} />
                <input type={'text'} name={'lastName'} placeholder="이름" className={styles.InputLastName} />
                <input type={'text'} name={'email'} placeholder="이메일" className={styles.InputEmail} />
                <input type='submit' value='등록' />
            </form>
  )
}

export default RegisterForm