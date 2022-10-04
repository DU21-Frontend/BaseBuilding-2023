import * as React from 'react'
import { ListProduct } from '../../mockData/productList'
import { IProduct } from '../../types/IProduct'
import { Product } from './Product'
import '../../styles/products.css'

// TO TEST: Won't have conflict in name since this constant only available on this module
// const ListProduct = []

export const ProductList = () => {
  const renderProducts = (array: Array<IProduct>) => {
    return array.map((product: IProduct) => (
      <div className="col-md-3">
        {/* <Product product={product} /> */}

        {/* If don't split the code to smaller pieces for reusing */}
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
      </div>
    ))
  }

  const renderProductsSale = () => {
    const listProductSale = ListProduct.filter((product) => product.isSale)

    // If don't split the code to smaller pieces for reusing
    return listProductSale.map((product) => (
      <div className="col-md-3">
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
      </div>
    ))

    // If split the code to smaller pieces for reusing
    // return renderProducts(listProductSale);
  }

  return (
    <div className="shell">
      <div className="container">
        <h1>
          List Product
          <hr />
        </h1>
        <div className="row">{renderProducts(ListProduct)}</div>
      </div>
      <div className="container">
        <h1>
          List Sale
          <hr />
        </h1>
        <div className="row">{renderProductsSale()}</div>
      </div>
    </div>
  )
}
