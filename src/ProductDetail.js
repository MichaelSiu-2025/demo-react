import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductDetail() {

    let params = useParams()
    let [productDetail, setproductDetail] = useState(null)

    React.useEffect(() => {
            fetch('https://michaelsiu-2025.github.io/demoapi/react-basic-product.json')
                .then(response => response.json())
                .then(data => {
                    let productInfo = data.find(item => item.id === parseInt(params.id))
                    setproductDetail(productInfo)
                })
        }, [])  //18 [] 代表只執行一次 Dependency Array

    return (
        <div> 
            {
                productDetail &&
                <div>
                <Title mainTitle={productDetail.name+'產品資料'}  />
                <img src={process.env.PUBLIC_URL+'/reactPhoto/'+productDetail.image} alt={productDetail.name} width="400"/>
                <p>價錢: {productDetail.price}</p>
                <p>描述: {productDetail.description}</p>

                <QuantityBtn productInfo={productDetail}/>
                {/* bring parameter ID to this page */}
                {/* #{params.id} Product Detail */}
                {/* 15. how to go back to main page */}
                <Link to="/">Back to Product List</Link>   
                </div>
            } 
        </div>
    )
}
