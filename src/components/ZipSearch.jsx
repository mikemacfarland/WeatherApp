
function ZipSearch() {
  return (
        <div className='search_bar_box'>
            <input type="text" placeholder='Enter Your Zip Code'/>
            <button type='submit' disabled={true}>Submit</button>
        </div>
  )
}

export default ZipSearch