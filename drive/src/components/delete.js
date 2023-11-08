import axios from "axios";


export const deleteI = (pathname, name, setF) => {
    let url;
    if (pathname === "/") {
        url = `http://localhost:3333/${name}`;
    } else {
        url = `http://localhost:3333${pathname}/${name}`;
    }

    axios.delete(url).then(() => {
        let nameDeleded = name
        setF((prv) => {
            const newPrv = prv.filter(item => item.name !== nameDeleded);
            return [...newPrv];
        })
    }
    ).catch(e => {
        console.error(e)
    })
}