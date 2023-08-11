
import {BiUpArrow, BiDownArrow} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'



function Cart({cart}) {

  const isEmpty = !cart?.line_items?.length
  console.log(isEmpty)



  return (
    <div>

      <header>
        <h1 className='text-2xl font-bold'>Shopping Cart</h1>
      </header>
   
<section className='my-20 '>

{
isEmpty? 
  <>
  <h1>Empty Cart</h1>
  </>:
  cart?.line_items?.map((items) => (

   <div 
   key={items.id}
   className='flex justify-between items-center border-b-[0.5px] border-t-[0.5px] w-[100%] py-8  '>
    <div className='flex gap-3'>
     <img className='w-[20%] object-cover' src={items.image.url} alt="" />
     <div className='text-sm'>
     <h2 className='mb-1 text-lg '>{items.name}</h2>
     <p className='mb-1'>{items.price.formatted_with_symbol}</p>
   
     </div>
    </div>

   <div className='flex gap-2 items-center'>
    <div className='flex flex-col items-center '>
    <button><BiUpArrow/></button>
    <span>{items.product_meta.quantity}</span>
    <button><BiDownArrow/></button>
    </div>
    <AiFillDelete/>
   </div>

   </div>
  ))
}



 <div className='mt-20 bg-[#000] text-white p-5 rounded-sm'>
  <h1 className='text-2xl '>Order Summary</h1>

  <div>
    <div className='flex my-2 justify-between'>
    <h2>Subtotal</h2>
    <p>$4556</p>
    </div>
    <div className='flex mb-2 justify-between'>
    <h2>Shipping Estimate</h2>
    <p>$4556</p>
    </div>
    <div className='flex mb-2 justify-between'>
    <h2>Order total</h2>
    <p>$4556</p>
    </div>
  </div>

<div className='w-full mt-4 '>

  <button className=' bg-white  text-black py-2 rounded-sm w-full'>CheckOut</button>
</div>

   </div>

</section>


    </div>
  )
}

export default Cart
