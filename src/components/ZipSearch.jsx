import { useState } from "react"

function ZipSearch({ZipCode,setZip}) {

  const [isDisabled,setDisabled] = useState(true)
  const [inputVal,setInputVal] = useState('')

  // regex test from this page
  // https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-digits
  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }

  const handleChange = (e)=>{
    if(e.target.value.length === 5 && onlyNumbers(e.target.value)){
        setDisabled(false) 
        return setInputVal(e.target.value)
    }
    else{
      setDisabled(true)
    }
    
  }

  const handleSubmit  = ()=>{
    setZip(inputVal)
  }

  return (
        <div className='search_bar_box'>
            <input onChange={handleChange} type="text" placeholder='Enter Your Zip Code'/>
            <button onClick={handleSubmit} type='submit' disabled={isDisabled}>Submit</button>
        </div>
  )
}

export default ZipSearch