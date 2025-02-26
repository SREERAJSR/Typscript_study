import axios,{AxiosError, AxiosResponse} from 'axios';
interface ToDo{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const fetchData = async <T> ():Promise<unknown>=>{
try {
    const response:AxiosResponse<ToDo> = await axios('https://jsonplaceholder.typicode.com/todos/1')
    return response.data 
} catch (error:any) {
    if(axios.isAxiosError(error)){
console.error(`Axios Error: ${error.message}`)

if(error.response){
    console.log("Status: ",error.response.status);
    console.log("Status: ",error.response.data);
}
    }else{
        console.error("Error :"+error.message)
    }
}
}

const getData = async () => {
    const data = await fetchData<ToDo>();
    console.log(data);
  };
  
  getData(); 