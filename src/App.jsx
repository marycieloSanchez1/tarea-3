import { useEffect, useState } from "react"
import { getProducts } from "./actions/products.api"
import { CardProduct, Loading, Navbar, TabCategories, Title } from "./components"

export const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts().then(res => {
      if (res) {
        setLoading(false)
        setProducts(res)
      }
    })
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <Navbar />
      <Title title={"MI TIENDA ONLINE"} />
      <TabCategories />
      <section className="py-10 bg-gray-100">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {
        products.map((product) =>(
          <CardProduct product={product}/>
        ))
       }
        </div>
      </section>
      <h1>{JSON.stringify(products)}</h1>
    </div>
  )
}