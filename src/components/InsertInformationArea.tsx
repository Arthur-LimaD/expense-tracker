import * as C from '../App.styles'
import React, {useState} from 'react'
import { Item } from '../data/Items';

interface IProps {
    createNewItem: (item: Item)=> void;
    children?: React.ReactNode;
}

const InsertInformationArea = ({createNewItem}: IProps)=> {

    const [newTitle, setNewTitle] = useState<string>()
    const [newCategory, setNewCategory] = useState<string>()
    const [newDate, setNewDate] = useState<string>()
    const [newValue, setNewValue] = useState<string>()

    function submit (e: React.MouseEvent<HTMLElement>) {
        e.preventDefault()

        if(newDate && newValue && newCategory && newTitle){
            const [yy, mm, dd] = newDate.split('-')

            let dateFormated = new Date(Number(yy), Number(mm) - 1, Number(dd))
            createNewItem(new Item(dateFormated, newCategory, newTitle, Number(newValue)))

        }else{
            alert('Preencha todos os campos!!')
            console.log({newDate, newCategory, newTitle, newValue})
        }

    }

    return (
    <C.InsertInfoArea>
            <C.InfoAreaDiv>
                <label>Date</label> 
                <input name="date" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setNewDate(e.target.value)}} type="date"/>
            </C.InfoAreaDiv>
            <C.InfoAreaDiv>
                <label>Category</label>
                <select name="category" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> {setNewCategory(e.target.value)}}>
                    <option value="house">House</option>
                    <option value="salary">Salary</option>
                    <option value="food">Food</option>
                </select>
            </C.InfoAreaDiv>
            <C.InfoAreaDiv>
                <label>Title</label>
                <input name="title" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setNewTitle(e.target.value)}}/>
            </C.InfoAreaDiv>
            <C.InfoAreaDiv>
                <label>Value</label>
                <input name="value" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setNewValue(e.target.value)}} />
            </C.InfoAreaDiv>
        <button onClick={submit}>Submit</button>
    </C.InsertInfoArea>
    )
}

export default InsertInformationArea