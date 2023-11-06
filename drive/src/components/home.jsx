import "./home.css"
import { Table } from './createFolder';
export const Home = ({ data }) => {
    let str = typeof data === 'string';
    return (
        <div >
            {str ? <h3>{data}</h3> :
                <div>
                    <h2>תיקיות</h2>
                    {data &&
                        <Table data={data.folders} />}
                    <h2>קבצים</h2>

                    {data &&

                        <Table data={data.files} />}
                </div>
            }
        </div>
    )
}