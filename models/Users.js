import {usersData} from '@/helper/constants.js'

class Posts{
    static fetchAllUsers(){
        return {
            data: usersData,
        };
    }
}
export default Posts;