import Products from './Products'
import data from '../menu.json'
const Product = () => {
  return (
    <>
      <div className='container px-20 mx-auto pb-24'>
        <h1 className='text-lg font-bold my-8'>Products</h1>
        <div className='grid md:grid-cols-3 grid-cols-1  my-8 gap-24'>
          {
            // products.map(product => <Products key={product._id}/>)
            data.map(product => <Products key={product._id} product={product}/>)

          }
        </div>
      </div>
    </>
  )
}

export default Product