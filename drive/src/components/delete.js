import axios from "axios";


export const deleteI = (pathname,name,setF) => {
    axios.delete("http://localhost:3333" + pathname).then((data) => {
        name = data.data.name;
        setF((prv)=>{
            const newPrv = prv.filter(item=> item.name !== name);
            return [...newPrv];
        })
    }
    ).catch(e => {
        console.error(e)
    })
    console.log(pathname);
}