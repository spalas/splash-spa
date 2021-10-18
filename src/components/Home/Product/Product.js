import React from 'react';
import './Product.css'
import product1 from '../../../images/products/product1.png'
import product2 from '../../../images/products/product2.png'
import product3 from '../../../images/products/product3.png'
import product4 from '../../../images/products/product4.png'
import product5 from '../../../images/products/product5.png'
import product6 from '../../../images/products/product6.png'

const Product = () => {
    return (
        <div className="container">
            <h2 className='mt-5'> Our Products</h2>
            <h1 className='font-h4'>The people SPA wellness behind us </h1>

            <div className="card-group d-flex justify-content-center my-5">
                <div className="card">
                    <img src={product1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Yougat</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={product2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cocooil</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>

                <div className="card">
                    <img src={product3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">special powder</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>

            </div>
            <div className="card-group d-flex justify-content-center">
                <div className="card">
                    <img src={product4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Orgain</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={product5} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Orange cream</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={product6} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Mix furits Cram</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;