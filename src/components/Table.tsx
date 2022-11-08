import { listenerCount } from "process";
import * as C from "../App.styles";
import {Item} from '../data/Items'
import TableItem from './TableItem'

type Props = {
    list: Item[];
    children?: React.ReactNode;
}

const TableArea = ({list}: Props)=> {
    return (
        <C.TableAreaStyles>
            <thead> 
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Category</C.TableHeadColumn>
                    <C.TableHeadColumn>Title</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=> (
                    <TableItem item={item} key={index}/>
                ))}
            </tbody>

        </C.TableAreaStyles>
    )
}

export default TableArea