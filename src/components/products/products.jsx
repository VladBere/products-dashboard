import React, { useState } from 'react'

import { useGetData } from '../../hooks/use-get-data'
import { CardList } from './card-list'
import { Table } from './table'

export const Products = () => {

    const {data: products, loading} = useGetData({endpoint: '/products'})

  const [isCards, setIsCards] = useState(false)

  const viewSwitchHandler = () => {
    isCards ? setIsCards(false) : setIsCards(true)
  }

  if (isCards) {
    return (
      <CardList products={products} viewSwitchHandler={viewSwitchHandler} loading={loading}/>
    )
  } else {
    return (
      <Table products={products} viewSwitchHandler={viewSwitchHandler} loading={loading} />
    )
  }
}

