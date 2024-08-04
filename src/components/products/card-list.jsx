import React from 'react'

export const CardList = ({products, viewSwitchHandler, loading}) => {

    const trunc = (text, maxLenght) => text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

    return (
      <>
        <button onClick={viewSwitchHandler} >Switch to table</button>
        <ul className='text-dark-blue flex flex-wrap mt-10 gap-x-10 gap-y-6 justify-center'>
            {loading ? 
            ( <div className='mt-10 flex justify-center gap-x-2 text-primary-500 rounded-md p-5'>
                Loading <img className='animate-spin' src="./src/assets/icons/loader-2.svg" alt="" />
            </div> ) : (
            products.map(i => {
              return (
                <li key={i.id} className='rounded-xl overflow-hidden border-solid border-dark-blue-border border-2 flex flex-col justify-between w-[320px] h-[525px]'> 
                  <div>
                    <img src={i.images[0]} alt={i.title} /> 
                    <div className='p-3'>
                        <p className='text-2xl'>{i.title}</p>
                        <p className='font-bold'>{i.category.name}</p>
                        <p>{trunc(i.description, 100)}</p>
                        <p className='text-green-money font-bold'>{i.price}$</p>
                    </div>
                  </div>
                </li>
              )
            }))}
        </ul>
      </>
    )
}