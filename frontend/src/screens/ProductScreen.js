import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const ProductScreen = () => {
  const [product, setProduct] = useState({})
  const params = useParams() //
  const { id } = params
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      // console.log(data)
      setProduct(data)
    }
    fetchProduct()
    // console.log(product.name)
  }, [id])
  return <div>{product.name} aaaa</div>
}

export default ProductScreen
