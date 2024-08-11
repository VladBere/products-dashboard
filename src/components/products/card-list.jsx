import React from 'react'
import { Card , Col, Row , Tooltip } from "antd";

export const CardList = ({products, viewSwitchHandler, loading}) => {

    const trunc = (text, maxLenght) => text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

    return (
      <>
      <button onClick={viewSwitchHandler} >Switch to table</button>
        <Row gutter={16}>
            {products.map(i => {
              return (
                <Col span={4}>
                    <Card
                    title={i.title}
                    style={{
                      width: 300,
                    }}
                  >
                  <img src="https://i1.sndcdn.com/artworks-95xJDyi1WmV9SEtE-8Kx8IA-t500x500.jpg" alt={i.title} className='w-'/> 
                  <div className='p-3'>
                      <p className='font-bold'>{i.category.name}</p>
                      <Tooltip title={i.description}>
                        <p>{trunc(i.description, 50)}</p>
                      </Tooltip>
                      <p className='text-green-money font-bold'>{i.price}$</p>
                  </div>
                  </Card>
                </Col>  
              )
            })}
        </Row>  
      </>
    )
}