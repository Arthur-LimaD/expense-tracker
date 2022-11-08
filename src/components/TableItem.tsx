import * as C from '../App.styles'
import { Item } from '../data/Items'
import {Categories} from '../data/Categories'

type Props = { 
    item: Item
    children?: React.ReactNode
}

const TableItem = ({item}: Props)=>{

    return(
        <C.TableLine>

            <C.TableColumn>
                {`${item.date.getFullYear()}/${item.date.getMonth() + 1}/${item.date.getDate()}` }
            </C.TableColumn>
            
            <C.TableColumn>
                <C.Category color=
                    {Categories[item.category].color}>{Categories[item.category].title}
                </C.Category>
            </C.TableColumn>

            <C.TableColumn>
                {item.title}
            </C.TableColumn>

            <C.TableColumn>
                <C.Value color={Categories[item.category].expense ? 'red' : 'green'}>
                $ {item.value}
                </C.Value>
            </C.TableColumn>

        </C.TableLine>
    )
    
}

export default TableItem