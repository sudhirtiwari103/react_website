import {Link} from 'react-router-dom';

const Navigation = () => {
  const cartStyle = {
    background:'#F59E0D',
    display:'flex',
    borderRadius:'50px',
    padding:'6px 12px',
  }
  return (
    <>
        <nav className='container  mx-auto flex item-center justify-between py-4'>
              <Link to="/">
                <img style={{height:45}}src='/images/logo.png' alt='logo'/>
               </Link>
               <ul className='flex item-center' >
                <li className='py-1'><Link to="/">Home</Link></li>
                <li className='ml-6 py-1' ><Link to="/product">Product</Link></li>
                <li className='ml-6 '>
                  <Link to="/cart">
                    <div style={cartStyle} >
                      <span>10</span>
                        <img className='ml-2' src='/images/cart.png' alt='cart' /> 
                    </div>
                  </Link>
                </li>
               </ul>
        </nav>
    </>
  )
}

export default Navigation