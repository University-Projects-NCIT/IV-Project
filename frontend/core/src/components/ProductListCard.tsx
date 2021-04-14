import ProductListItem from './productListItem'

const ProductListCard: React.FC = () =>{
    /**
     * @returns Product list as card with grouping the same date
     * for eg: Product are grouping with Today, yesterday card
     * Each card should be different date card 
     */

    return (
        <>
            <div className="flex flex-row pb-4 text-white justify-between">
                <div className="text-lg">Today's Product</div>
            </div>
            <div className="rounded mb-10 overflow-hidden w-full h-auto">     
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/> 
            </div>

            <style jsx>{`

            `}</style>
        </>
    )
}

export default ProductListCard;