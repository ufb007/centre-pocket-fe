type ButtonType = {
    name: string
}

export const Button = ({name}: ButtonType) => {
    return (
        <button 
            className="
                    px-5 py-2
                    bg-primary 
                    text-secondary 
                    rounded-full 
                    uppercase 
                    hover:bg-primary-red
                    hover:text-white
                    transition
                    duration-500">
            {name}
        </button>
    )
}