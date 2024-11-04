import mypic from './assets/image2.png'
import './index.css';


const Header=()=>{
  return(
    <header>
      <img src={mypic} alt="my image" />
      <nav>
        
        <div className='nav'>
        <h4>Company name</h4>
        <ul>
          
          <li><a href="/Featurs.jsx">Features</a></li>
          <li><a href="/Enterprise.jsx">Enterprise</a></li>
          <li><a href="/Support.jsx">Support</a></li>
          <li><a href="/Home.jsx">Home</a></li>
        </ul>
        </div>
        <div className='line'/>
      </nav>
    
    </header>
  );
}

export default Header;