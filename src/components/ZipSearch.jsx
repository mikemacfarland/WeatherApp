import { useState,useContext} from "react"
import WeatherContext from "../context/WeatherContext";

function ZipSearch() {

  //importing context here
  const {setError,setZipCode} = useContext(WeatherContext)
  const [isDisabled,setDisabled] = useState(true)
  const [inputVal,setInputVal] = useState('')

  // regex test from this page
  // https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-digits
  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }

  const handleChange = (e)=>{
    if(onlyNumbers(e.target.value)) {
      setError('')
      if(e.target.value.length === 5){
        setDisabled(false)
        return setInputVal(e.target.value) 
      }
    }
    if(!onlyNumbers(e.target.value)){
      e.target.value.length === 0 ? setError('') :
      setError('Please enter a 5 digit numberical zip code')
      setDisabled(true)
    }
    else{
      setDisabled(true)
    }
  }

  const handleSubmit  = (e)=>{
    e.preventDefault()
    setZipCode(inputVal)
  }

  return (
    // make this into form so you can use onSubmit
        <form onSubmit={handleSubmit} className='search_bar_box'>
            <input onChange={handleChange} type="text" placeholder='Enter Your Zip Code'/>
            <button type='submit' disabled={isDisabled}>{isDisabled === true ? 'Disabled' : 'Submit'}</button>
        </form>
  )
}

export default ZipSearch