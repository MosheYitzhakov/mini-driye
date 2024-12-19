import  instance  from './API';
export const deleteI = (pathname, name, setF) => {
    let url;
    if (pathname === "/") {
        url = name;
    } else {
        url = `${pathname}/${name}`;
    }

    instance.delete(url).then(() => {
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