import { useState } from "react"

function ZipSearch({setZip,setZipError}) {

  const [isDisabled,setDisabled] = useState(true)
  const [inputVal,setInputVal] = useState('')

  // regex test from this page
  // https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-digits
  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }

  const handleChange = (e)=>{
    if(onlyNumbers(e.target.value)) {
      setZipError('')
      if(e.target.value.length === 5){
        setDisabled(false)
        return setInputVal(e.target.value) 
      }
    }
    if(!onlyNumbers(e.target.value)){
      e.target.value.length === 0 ? setZipError('') :
      setZipError('Please enter a 5 digit numberical zip code')
      setDisabled(true)
    }
    else{
      setDisabled(true)
    }
  }

  const handleSubmit  = (e)=>{
    e.preventDefault()
    setZip(inputVal)
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