 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//custom React understand 
// function MyApp(){//captilized variable name
//   return(
//   <div>
//     <h1>hello world!!</h1>
//     </div>
//   )
// }


// const ReactElement= { //not alowed 
//   type:'a',
//   props:{
//       href:'http://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'

// }
const myName="Navjot Singh"
//const anotherElement=(<a href='www.google.com' target='_blank'>Visit google here</a>)

const anotherElement2=React.createElement('a',{href:'https://www.google.com',target:'_blank'},'click me ',myName)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  //  <React.StrictMode>
  // {/* its work without React.StrictMode but developer can use this for optimization */}
  // <App />
  
  // <myApp/>//not allowed captilized 
  
  //<MyApp/>
  
  //MyApp()//also write like that

  //ReactElement //not allowed because here react wants proper element or  function so that it would be convert it into dom tree and object according to pre defined rules

  //<h1>Hello guyzz</h1> //also allowed

  //anotherElement //also allowed

  anotherElement2

  //variable value
  //<App/>

  // </React.StrictMode>,
)
