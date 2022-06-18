import data from '../menu.json'
import { useParams } from 'react-router'
console.log(data);

const SingleProduct = () => {
 const params = useParams();
// const {product}=data;

 console.log(params._id);


    return (
        data.map(product => 
            
                <div className="container mx-auto mt-12">
                {/* <button className="mb-12 font-bold" onClick={ () => { history.goBack() } }>Back</button> */}
                <button className="mb-12 font-bold" ><a href='/'>Back</a></button>
                <div className="flex">
                    <img src={ product.img } alt="pizza" />
                    <div className="ml-16">
                        <h1 className="text-xl font-bold">{ product.name }</h1>
                        <div className="text-md">{ product.size }</div>
                        <div className="font-bold mt-2">₹ { product.price }</div>
                        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                    </div>
                </div>
            </div>

       
        )
    )
}

export default SingleProduct;
