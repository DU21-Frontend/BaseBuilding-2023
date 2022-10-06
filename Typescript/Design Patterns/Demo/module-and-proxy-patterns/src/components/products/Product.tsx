import * as React from 'react'

interface IProductProps {
  product: any
}

export const Product = (props: IProductProps) => {
  const { product } = props

  return (
    <div className="wsk-cp-product">
      {product.isSale && <div className="sale">Sale</div>}
      <div className="wsk-cp-img">
        <img src={product.url} className="img-responsive" alt={product.title} />
      </div>
      <div className="wsk-cp-text">
        <div className="category">
          <span>{product.category}</span>
        </div>
        <div className="title-product">
          <h3>{product.title}</h3>
        </div>
        <div className="description-prod">
          <p>{product.description}</p>
        </div>
        <div className="card-footer">
          <div className="wcf-left">
            <span className="price">{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
