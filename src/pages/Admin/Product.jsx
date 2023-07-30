import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = ({ products }) => {
    return (
        <div>
            <Link to={`/admin/product/add`}><button>Add New Product</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <Link to={`/admin/${item.id}/update`}><button>Update</button></Link>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductPage