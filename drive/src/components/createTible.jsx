export const Table = ({data}) => {
    return <table className='div-item'>
        <thead>
        <tr>
        <th>type</th>
        <th>name</th>
        <th>created</th>
    </tr>
    </thead>
    <tbody>
        { data.map((item, i) => {
            return <tr key={i}>
               <td>{item.type}</td> 
               <td>{item.name}</td> 
               <td>{item.created}</td> 
                </tr>
        })}
        </tbody>
    </table>

}