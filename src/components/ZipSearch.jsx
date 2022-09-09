import React from 'react'

function ZipSearch() {
  return (
    <div className='search_bar'>
        <div className='search_bar_box'>
            <input type="text" placeholder='Enter Your Zip Code'/>
            <button type='submit'>Submit</button>
        </div>
        {/* <p>error can go here?</p> */}
    </div>
  )
}

export default ZipSearch