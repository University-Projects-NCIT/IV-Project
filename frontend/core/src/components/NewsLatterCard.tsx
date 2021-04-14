import NewsLatterItems from './NewsLatterItems'

const NewsLatterCard: React.FC = () =>{
    /**
     * @returns  Notice News Latter List  as card 
     */

    return (
        <>
            <div className="flex flex-row pb-4 text-white justify-end">
                <div className="text-lg"> Your News Letter  </div>
            </div>
            <div className="rounded-lg mb-4 overflow-hidden w-full h-auto">     
                <NewsLatterItems/>
                <NewsLatterItems/>
                <NewsLatterItems/>
            </div>
        </>
    )
}

export default NewsLatterCard;