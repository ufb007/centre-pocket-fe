import { BsSearch } from 'react-icons/bs';

export const Search = () => {
    return (
        <>
            <div className="search mt-5 flex flex-row items-center">
                <BsSearch className="w-5 h-5 mr-3" />
                <input 
                    type="text" 
                    placeholder="SEARCH TOURNAMENTS" 
                    name="search_players" 
                    className="font-thin 
                               w-full 
                               rounded-3xl 
                               h-8 
                               px-4 
                               py-5 
                               bg-gray-50 
                               text-gray-500 
                               shadow-inner 
                               shadow-gray-300"  />
            </div>
        </>
    )
}