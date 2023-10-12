export const Menu = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="mini-menu flex flex-wrap justify-center py-3 px-10 bg-secondary text-white rounded-full rounded-t-none">
                <ul className="flex flex-row gap-3 text-sm">
                    <li className="text-primary-yellow cursor-pointer">Upcoming</li>
                    <li>::</li>
                    <li className="cursor-pointer hover:text-primary-yellow duration-500">Active</li>
                    <li>::</li>
                    <li className="cursor-pointer hover:text-primary-yellow duration-500">Finished</li>
                </ul>
            </div>
        </div>
    )
}