import { useState } from 'react'
import Buttons from './components/Buttons'

function App() {
  const [color, setColor] = useState('olive')
  const colorsArray = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black', 'white', 'cyan', 'teal', 'indigo', 'lime', 'indigo', 'teal', 'pink', 'gray', 'brown'];
  const callBack=(colors)=>setColor(colors)
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl rounded-2xl bg-white p-2'>
        {colorsArray.map((color, index) => (
            <Buttons key={index} initialColor={color} functionCall={callBack} />
          ))}
        </div>
      </div>
     
    </div>
  )
} 

export default App
