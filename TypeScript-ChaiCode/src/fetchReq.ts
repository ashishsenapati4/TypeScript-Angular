interface Comments{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const fetchData = async()=>{
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments/1"
        );
        if(!response.ok)
        {
            throw new Error(`HTTP errpr ${response.status}`);
        }
        const data: Comments = await response.json();
        console.log(data);
    }
    catch(error: any)
    {
        throw new Error(`Some error occurred`);
    }
}
fetchData();