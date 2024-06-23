 
import './App.css'

 

export default function App(){
   
 
  
  return <> 
  <div className='first-page' style={{ backgroundImage: `url('/images/Frame 6.png')`}}>
    <img className='icon' src='/images/Frame.svg' alt='frame'/>
    <h1 className='sub-heading' >The choice is yours.<br/> Because they don’t have one. </h1>
    <button className='button' >QUICK VIEW</button>
  </div>

  <div className='second-page' >
    <div className='row'>
      <img className='first-line-about' src='/images/Frame (1).png'/>
      <p className='about' >About</p>
      <img className='second-line-about' src='/images/Frame (1).png'/>
    </div> 
    {/* about line */}
    <div className='row' >
      <img className='line'  src='/images/Frame.png'/>
      <p className='para' >Our products are crafted exclusively from the
         dreams and screams of young 
        kids who wanted to show their mastery in their
         chosen fields, but were directed
         towards a factory for daily wages. Each cracker bursts brighter than their
          lost smiles, and can be heard louder than their cries for miles. Buy them, 
          burst them, brag about them.
          <br/>
      <span className='sub-para'>  The choice is yours. Because they don’t have one.</span></p>
      <img className='crackers' src='/images/Frame.png'/>
    </div>
    {/* below paragraph */}

    <div className='row maxw'>
      <img className='line-our-product'  src='/images/Frame (1).png'/>
      <pre className='about our-product' >Our products</pre>
      <img className='second-our-product'  src='/images/Frame (1).png'/>
    </div>
  </div>

  {/* third */}
  
  <div className='row third' >

  <div className='third-page'>  
      <div className='sub-block' >
          <img className='img' src='/images/Frame 7.png'/>
          <div className='row' style={{justifyContent:'space-between'}}  >
            <span className='sub-para'>Raju Rassibomb</span>
            <button className='button-add'   >QUICK VIEW</button> 
          </div> 
        </div>
    </div>
    <div className='third-page the' >
    <div className='sub-block' >
          <img src='/images/Frame 7.png'/>
          <div className='row' style={{justifyContent:'space-between'}}  > 
          <span className='sub-para'>Ladiyon ki Rani Chani</span>
          <button className='button-add'   >QUICK VIEW</button> 
          </div>
        </div>
    </div>
    
    </div>
  
  <img className='last-design' src='/images/Frame (3).png'/>
   
 





{/* last one */}
<div className='contact' >
   
    <img style={{marginTop:'0px',position:'absolute' }} src='/images/Frame 64 (1).png'/>
    <div className='row1'> 
    <img className='flower' src='/images/Frame 62.png'/>
    <div className='icons' >
        <p className='Follow-us-on' style={{marginLeft:'17%',marginBottom:'5%'}} >Follow us on</p>
        <div >
          <img style={{marginRight:'10px'}} src='/images/001-instagram.png'/>
          <img style={{marginRight:'10px'}} src='/images/002-youtube.png'/>
          <img style={{marginRight:'10px'}} src='/images/003-twitter.png'/>
          <img style={{marginRight:'10px'}} src='/images/004-facebook.png'/>
          <img style={{marginRight:'10px'}} src='/images/005-linkedin.png'/>
        </div> 
    </div>
    <img className='flower' src='/images/Frame 62.png'/>
    </div>

</div>
<img  style={{marginTop:'0px',position:'absolute' }} src='/images/Frame 64 (1).png'/>

  
   
   </>
}
