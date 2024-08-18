import React from 'react'
import { Table , Tooltip } from 'antd';

export const ProductsTable = ({products, viewSwitchHandler, loading}) => {

    const trunc = (text, maxLenght) => text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

    const dataSource = products.map(product => ({
        key: product.id,
        title: product.title,
        price: product.price,
        category: product.category.name,
        description:
            <Tooltip title={product.description}>
                <p>{trunc(product.description, 100)}</p>
            </Tooltip>,
    }))

      const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        }
      ];
      

  return (
    <>
      <button onClick={viewSwitchHandler} className=''>Switch to cards</button>
      {loading ? 
            ( <div className='mt-10 flex justify-center gap-x-2 text-primary-500 rounded-md p-5'>
                Loading <img className='animate-spin' src="./src/assets/icons/loader-2.svg" alt="" />
            </div> ) : (
            <Table dataSource={dataSource} columns={columns} />
      )}
    </>
  )
}


