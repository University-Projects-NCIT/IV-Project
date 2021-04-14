import ProductListItem from './productListItem'
import UpcommingItemList from './UpcommingItemList'

const ProductListCard: React.FC = () =>{
    /**
     * @returns Upcomming Product list as card 
     */

    return (
        <>
            <div className="flex flex-row pb-4 text-white justify-end mb-2">
                <div className="text-lg">Upcomming Product </div>
            </div>
            <div className="rounded-lg mb-8 overflow-hidden ">     
                <UpcommingItemList/>
                <UpcommingItemList/>
                <UpcommingItemList/>
            </div>
        </>
    )
}

export default ProductListCard;