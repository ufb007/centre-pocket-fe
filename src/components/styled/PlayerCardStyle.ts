import tw from "tailwind-styled-components";

export const Container = tw.div`
    relative 
    cursor-pointer 
    w-1/3 
    flex 
    mb-8 
    px-2
    group
`;

export const Img = tw.img`
    w-40
    h-full
    object-cover
    `;

export const Rank = tw.div`
    text-white
    py-2 w-12
    text-center
    bg-primary-blue
    rounded
    rounded-t-none
    font-roboto-condensed
    text-2xl 
    absolute 
    right-5 
    top-[-10px]
    hover:bg-primary-red
    group-hover:bg-primary-red
    transition
    duration-500
    `;

export const FullName = tw.div`
    text-xl 
    mb-5
    `;

export const ProfileUl = tw.ul`
    flex 
    flex-row 
    font-roboto-condensed 
    text-gray-300
    `;

export const ProfileLi = tw.li`
    flex 
    flex-col 
    border-l 
    border-gray-50 
    border-opacity-50 
    pl-2 
    w-[32%] 
    py-1 
    items-center
`;

export const FollowBtn = tw.div`
    font-thin 
    follow 
    px-4 
    py-1 
    mr-2 
    bg-primary-red 
    text-white 
    uppercase 
    text-sm 
    absolute 
    bottom-3 
    right-0 
    rounded-2xl 
    rounded-r-none
    hover:bg-primary-yellow
    hover:text-black
    group-hover:bg-primary-yellow
    group-hover:text-black
    transition
    duration-500
`;