import ProductListItem from './productListItem'

const ProductListCard: React.FC = () =>{
    /**
     * @returns Product list as card with grouping the same date
     * for eg: Product are grouping with Today, yesterday card
     * Each card should be different date card 
     */

    return (
        <div className="bg-red-500 rounded-lg  container md:m-auto md:mt-7 overflow-hidden m-auto">     
            <ProductListItem/>
            <ProductListItem/>
            <ProductListItem/>
            <ProductListItem/>
        </div>
    )
}

export default ProductListCard;