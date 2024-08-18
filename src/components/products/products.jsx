import React, { useState } from 'react'

import { useGetData } from '../../hooks/use-get-data'
import { CardList } from './card-list'
import { ProductsTable } from './productsTable'
import { SelectProducts } from './select-products'

export const Products = () => {

  const [categorySelectValue, setCategorySelectValue] = useState(null)

let endpoint

if (categorySelectValue === null) {
  endpoint = '/products'
} else {
  endpoint = `/categories/${categorySelectValue}/products`
}

//зроби хендлер для категорыъ ы пропсом передай 

  const {
      data: products,
      loading,
  } = useGetData({
      endpoint: endpoint,
      queryParamsObject: {
          limit: 50,
          offset: 0,
      }
  })

const selectCategoryHandler = (value) => {
  setCategorySelectValue(value)
}

  const [isCards, setIsCards] = useState(false)

  const viewSwitchHandler = () => {
    isCards ? setIsCards(false) : setIsCards(true)
  }

  if (isCards) {
    return (
      <>
        <SelectProducts selectCategoryHandler={selectCategoryHandler}/>
        <CardList products={products} viewSwitchHandler={viewSwitchHandler} loading={loading}/>
      </>
    )
  } else {
    return (
      <>
        <SelectProducts selectCategoryHandler={selectCategoryHandler}/>
        <ProductsTable products={products} viewSwitchHandler={viewSwitchHandler} loading={loading} />
      </>
    )
  }
}

