
import './App.css'
import Card from './components/Card';

function App() {
  let directObj={name:'navjot',email:"navjot@navjot.com"};
  let DirectArray=[1,2,3,4];
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card name='Navjot' definedObj={directObj} rollNo='21071283' definedArray={DirectArray}/>
    <Card name='Imran' definedObj={directObj} rollNo='21071283' definedArray={DirectArray}/>
    {/* <Card name='Navjot' directObj={} DirectArray=[1,2,3,4]/> Direct object and array are not  */}
    {/* <Card name='Navjot' /> */}
    {/* <Card/> */}
    </>
  )
}

export default App
