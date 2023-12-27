import { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import { InputBox } from './components/index'; //it is also write but index file auto call
import { InputBox } from './components';


function App() {
    console.log("Render App ");
  const [amount,setAmount]=useState(null)  //how much amount
  const [to,setTo]=useState('inr') //intiail value that is selected in drop down
  const [from,setFrom]=useState('usd') //intiail value that is selected in drop down
  const [convertedAmount,setConvertedAmount]=useState(null) // hold the value for To Input box that is converted 
  
  const currencyInfo=useCurrencyInfo(from);//call custom hook and that call api and it gives the object with all countries from to to
  //console.log("countery and there currency",currencyInfo)//print country names  and there values 
  const options=Object.keys(currencyInfo);//pick the only country names (keys)
  //console.log(options)
  const swap =()=>{ //swap function is use for when we click on swap button it change the value of To and From
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); 
    setAmount(convertedAmount);

  }
  //FUCTION  FOR  convert the amount of from to selected currency
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  const BackgroundImage='https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  // useEffect(()=>{swap()},[]) 
  // console.log(`to:${to} and from : ${from}`)
//  const price=useCurrencyInfo('usd')
//  console.log("data value by funtion return in app.jsx:",price);
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('${BackgroundImage}')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();//when form submit then prevent default events 
                     convert(); //convert the value 
                  }}
              >
                  <div className="w-full mb-1">

                    {/* inputbox component render here  */}
                      <InputBox
                          label="From" //pass the label for first input box 
                          amount={amount} //send the intial amount 
                          currencyOptions={options} //send all currency names 
                          selectCurrency={from} //selected currrency 
                          onCurrencyChange={(currency)=>{ //what happen when currency change like if someone select other option in countery 
                            return setFrom(currency);//set new from value 
                          }}
                          onAmountChange={(amount)=>setAmount(amount)}
                      />


                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">

                     {/* inputbox component render here  */}
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          selectCurrency={to}
                          onCurrencyChange={(currency)=>{
                            return setTo(currency);
                          }}
                         
                         />

                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
