

import { Link } from "react-router-dom"




function Home({products, onAddToCart}) {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((item) => {
        return(
        <>
        <div  key={item.id}  >
        <Link >
          
        <img className="rounded-sm w-full h-[30vh] object-cover" src={item.image.url} alt="" />
        <div className="flex justify-between">
        <h1 className="text-base">{item.name}</h1>
        <p className="text-base">${item.price.formatted_with_symbol}</p>
        </div>
        </Link>
        <p className=" cursor-pointer" onClick={() => onAddToCart(item.id,1) }>Add</p>
        </div>

        </>
        )
      })}
    </div>
  )
}

export default Home