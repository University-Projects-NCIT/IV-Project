import NewsLatterItems from './NewsLatterItems'

const NewsLatterCard: React.FC = () =>{
    /**
     * @returns  Notice News Latter List  as card 
     */

    return (
        <>
          <div className="flex flex-row pb-4 text-white justify-end">
                <div className="text-lg"> Your News Latter  </div>
            </div>
            <div className="rounded-lg mb-4 overflow-hidden w-full h-auto">     
            <div className="news-container">
              <NewsLatterItems/>
              <NewsLatterItems/>
              <NewsLatterItems/>
            </div>
            </div>
        </>
    )
}

export default NewsLatterCard;