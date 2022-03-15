import React, { Component } from 'react'

class TitleBar01 extends Component{

    constructor() {
        // 부모 생성자, Component (a, a, a) 형식, 객체를 배열형태로 분해해서 넣어줘야함.
        super(...arguments)
        // this.no vs this.state.no 의 차이점
        //this.no = 0;
        this.state={
            no : 0
        }
    }

    onClickHandler(){
        // this.no vs this.state.no 의 차이점
        //this.no++
        // console.log(`TitleBar01 Clicked! ${this.no}`) 

        // 반드시 setState로 변경을 해줘야 한다. 
        
        this.setState({
            no : this.state.no + 1
        })
        console.log(`TitleBar01 Clicked! ${this.state.no}`) 
    }
    
    render(){
        return (
            <h1
                style={{cursor:'pointer'}}
                onClick={this.onClickHandler.bind(this)}>
                    ex03 : Functional Event Handler(Class Component)
                    <br/>
                    {
                        // this.no
                        this.state.no
                    }
            </h1>
          )
    }
}

export default TitleBar01