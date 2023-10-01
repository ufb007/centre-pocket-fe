import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

type UserType = {
    userId: string | number
}

const PostAuthor = ({ userId }: UserType) => {
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === Number(userId));

    return <span>by {author ? author.name : 'Unkown author'}</span>
}

export default PostAuthor