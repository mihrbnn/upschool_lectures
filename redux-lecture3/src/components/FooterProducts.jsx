import { useQueries } from "react-query";
import SingleProductCard from "./SingleProductCard";
import {useSelector} from "react-redux"
const FooterProducts = (productsId) => 
const queryProducts = useQueries(
  productIds.map(id => {
    return {
      queryKey: ["productId", id],
      queryFn: () => fetchSingleProduct(id)
    }
  })
)
  
  return (
    <>
      <hr />
      <div className="row">
        {
          queryProducts?.map(item => <div key={item.data.data.id} className="col-sm">
            <SingleProductCard
              title={item.data.data.title}
              price={item.data.data.price}
              img={item.data.data.image}
              description={item.data.data.description}
            />
          </div>)
        }
      </div>
    </>
  )
export default FooterProducts;