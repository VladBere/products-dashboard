import React from 'react'
import { Select } from 'antd'
import { useGetData } from '../../hooks/use-get-data'

export const SelectProducts = ({selectCategoryHandler}) => {

  const {
    data: categories,
    loading,
} = useGetData({
    endpoint: '/categories',
})

let options = []

categories.map(category => {
  options.push({value: category.id, label: <span>{category.name}</span> })})

  return (
    <>
      {loading ? 
        (
          <div className='mt-10 flex justify-center gap-x-2 text-primary-500 rounded-md p-5'>
            Loading <img className='animate-spin' src="./src/assets/icons/loader-2.svg" alt="" />
          </div>
        ) : (
          <Select placeholder="Select category" onChange={selectCategoryHandler} options={options}/>
      )}
    </>
  )
}