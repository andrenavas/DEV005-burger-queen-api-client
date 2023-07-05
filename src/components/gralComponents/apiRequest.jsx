export const getProducts = (token, setGetProductsRequestStatus, setProducts) => {
    fetch('http://localhost:8080/products', {

    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
  })
    .then((resp) => resp.json())
    .then((productsData) => {
      setGetProductsRequestStatus('success')

      if (productsData && Array.isArray(productsData)) {
        setProducts(productsData)
      }
    })
    .catch(error => {
      setGetProductsRequestStatus('error')
      console.log(error)
    })
}