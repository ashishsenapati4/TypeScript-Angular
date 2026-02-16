import axios from "axios";
import type { AxiosResponse } from "axios";

//if some times you dont see suggestions for a particular
//library like axios, then do this:
//npm i some-library
//npm i -D @types/some-library

// axios.get('https://example.com/data')
// .then(response => {
//     console.log(response);
// })

// https://jsonplaceholder.typicode.com/comments/1
// {
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// }
interface Comments{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const fetchData = async () => {
    try{
        const response: AxiosResponse<Comments> = await axios
        .get("https://jsonplaceholder.typicode.com/comments/1");
        console.log("Comments", response.data);
    }catch(error: any){
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}
fetchData();
