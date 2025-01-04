import { Link } from 'react-router-dom'
import React, { use } from 'react'
import listStyle from './ProductList.module.css'
import { useState } from 'react'    //React Hook
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {

    let photoExt = 'jpeg'

    let [productList, setProductList] = useState([])
    let [input, setInput] = useState('')    

    //17. fetch data from API + Using Github as a server
    React.useEffect(() => {
        //18. : 1) 如果useEffect()得一個參數, component每次render完後，會執行useEffect
        //18. : 2) 如果Dependency Array無值, 只會執行一次
        //18. : 3) 如果Dependency Array有值，只有當Dependency Array有改變，useEffect先會執行
        //18. component每次render完後，會執行useEffect
        fetch('https://michaelsiu-2025.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => setProductList(data))
        //console.log(productList)
    }, [])  //18 [] 代表只執行一次 Dependency Array

    React.useEffect(() => {
        //console.log('input:',input)
    }, [input]) //18 [input] 代表只有當input改變，useEffect先會執行

    //12. useState() 係functional component度定義嘅變數，唔可以改變，所以唔可以用let
    //let product = 'fruit'
    //12. const [product, setProduct] = useState('fruit')

    // const [showProduct, setShowProduct] = useState(false)

    // const handleClick = () => {
    //     setProduct('vegetable')
    //     console.log('product:',product)
    // }

  return (
    //23. 用React.Fragment包住所有嘅element
    <>
        {/* 12. {product} <button onClick={handleClick}>Click me</button> */}
        {/* {!showProduct && <button onClick={()=>{setShowProduct(true)}}>Show Me</button>}    */}
        {/* {showProduct && <button onClick={()=>{setShowProduct(false)}}>Hide Me</button>} */}

        <Title mainTitle='請選擇要購買的水果'/>
        
        {/* 10. process.env.PUBLIC_URL影響到GO Live時候條path */}
        {/* <img src={process.env.PUBLIC_URL+'/reactPhoto/apple.jpeg'} alt='apple'/> */}
        <div>
            {
                productList.map(product => (
                    <React.Fragment key={product.id}>
                        {/* 11. 下面係Global CSS */}
                        {/* <div className='productBorder'> */}
                        {/* 11. 下面係Local CSS, import from module css file */}
                        <div className={listStyle.productListBorder}>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>

                            <Link to={`/product/${product.id}`}>Detail
                            <img src={process.env.PUBLIC_URL+'/reactPhoto/'+product.image} alt={product.name}/>
                            </Link>
                            
                            <p>{product.description}</p>
                            <QuantityBtn productInfo={product}/>
                            </div>
                    </React.Fragment>       
                )) 
            }        
        </div>
    </>
  )
}
