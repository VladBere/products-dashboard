import React from 'react'

export const Table = ({products, viewSwitchHandler, loading}) => {

    const trunc = (text, maxLenght) => text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

  return (
    <>
      <button onClick={viewSwitchHandler} className=''>Switch to cards</button>
      {loading ? 
            ( <div className='mt-10 flex justify-center gap-x-2 text-primary-500 rounded-md p-5'>
                Loading <img className='animate-spin' src="./src/assets/icons/loader-2.svg" alt="" />
            </div> ) : (
      <div className='w-1/2 mx-auto border-2 border-slate-800 rounded-md p-4 mt-10'>
            <div className='flex items-center gap-x-2 p-2'>
                <div className='w-[120px]'>Title</div>
                <div className='w-[30px] ml-6'>Price</div>
                <div className='w-[100px] ml-1'>Category</div>
                <div className='w-[700px] ml-9'>Desrc</div>
            </div>

            {products.map((i) => (
                <div
                    key={i.id}
                    className='flex items-center gap-x-2 border-t border-t-slate-800 p-2'>
                    <div className='w-[150px]'>{i.title}</div>
                    <div className='text-green-money w-[30px] mr-[10px]'>{i.price}$</div>
                    <div className='w-[150px]'>{i.category.name}</div>
                    <div className='w-[700px]'>{trunc(i.description, 100)}</div>
                </div>
            ))}
        </div>)}
    </>
  )
}


