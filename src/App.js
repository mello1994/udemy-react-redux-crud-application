import { render } from "@testing-library/react";
import React, { Component } from "react";

//クラスコンポーネント
class App extends Component {
  render(){
    //変数を使用
    // const greeting = "Hi!";

    //classは予約語なので使えない、代わりにclassNameを使う
    // const dom = <h1 className="foo">{greeting} TOM</h1>
    // return dom

    //onClickを使用
    // return <input type="text" onClick={() => {console.log("I am clicked.")}} />;

    //onChangeを使用
    // return <input type="text" onChange={() => {console.log("I am clicked.")}} />;

    //forは予約語なので使いえない、代わりにhtmlForを使う
    // return(
    //   <div>
    //     <label htmlFor="bar">bar</label>
    //     <input id="bar" type="text" onChange={() => {console.log("I am clicked.")}} />
    //   </div>
    // )

    //最上位のタグは1つでなければいけない
    //以下はエラーとなる
    // return(
    //     <label htmlFor="bar">bar</label>
    //     <input id="bar" type="text" onChange={() => {console.log("I am clicked.")}} />
    // )

    //複数returnする場合は、React.Fragmentで囲む
    // return(
    //   <React.Fragment>
    //     <label htmlFor="bar">bar</label>
    //     <input id="bar" type="text" onChange={() => {console.log("I am clicked.")}} />
    //   </React.Fragment>
    // )

    //関数コンポーネントの呼び出し
    // return (
    //   <div>
    //     <Cat />
    //   </div>
    // )

    //propsを使用した関数コンポーネントの呼び出し
    const profiles = [
      {name: "Naoyuki", age: 26},
      {name: "Hanako", age: 10},
      {name: "Hanako"}
    ]
    return (
      <div>
        {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index} />
          })
        }
      </div>
    )
  }
}

//関数コンポーネント
// const Cat = () => {
//   return <div>Meow!</div>
// }

//関数コンポーネント
const User = (props) => {
  return <div>Hello, I am {props.name}, and {props.age} years old!</div>
}

//propsの初期値を設定
User.defaultProps = {
  age: 1
}

export default App;
