import ProductListItem from './productListItem'

const ProductListCard: React.FC = () =>{
    /**
     * @returns Product list as card with grouping the same date
     * for eg: Product are grouping with Today, yesterday card
     * Each card should be different date card 
     */

    return (
        <>
            <div className="flex flex-row pl-16 pt-8 pb-4 text-white justify-between">
                <div className="text-lg">Today's Product</div>
                <div className="flex flex-row mr-4">
                    <button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 ">Popular</button>
                    <div className="line"></div>
                    <button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60">Newest</button>
                </div>
            </div>
            <div className="rounded-lg pr-4 pb-4 pl-16 overflow-hidden w-full h-auto">     
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/> 
            </div>

            <style jsx>{`
                .btn{
                    border: none;
                    outline: none;
                }

                .line{
                    width: 3px;
                    height: 100%;
                    background: linear-gradient(
                    #2F80ED,
                    #EC1616
                    )
                }
            `}</style>
        </>
    )
}

export default ProductListCard;