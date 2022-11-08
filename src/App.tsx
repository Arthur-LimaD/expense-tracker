import React, {useState, useEffect} from 'react';
import * as C from './App.styles'
import './App.css'
import { Items, Item } from './data/Items';
import {Categories} from "./data/Categories"
import { getCurrentMouth, filterListByMouth } from './helpers/DateFilter';
import TableArea from './components/Table';
import InformationArea from './components/InformationArea';
import InsertInformationArea from './components/InsertInformationArea';

function App() {

  const [list, setList] = useState(Items)
  const [currentMouth, setCurrentMouth] = useState(getCurrentMouth())
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=> {
    setFilteredList(filterListByMouth(list, currentMouth));
  }, [currentMouth, list])

  useEffect(()=> {
    let incomeCount = 0;
    let expenseCount = 0;
    
      for(let i in filteredList){
          if(Categories[filteredList[i].category].expense){
            expenseCount += filteredList[i].value;
          }else{
            incomeCount +=  filteredList[i].value;
          }
      }

      setIncome(incomeCount)
      setExpense(expenseCount)

  }, [filteredList])

  const handleMonthChange = (newMonth: string): void=> {
      setCurrentMouth(newMonth)
  }

  const createNewItem = (item: Item) => {
      var newList = list;
      newList.push(item);
      setList(newList);
      setFilteredList(filterListByMouth(list, currentMouth));
  }

  return (
    <C.Container>
        <C.Header>
          <C.HeaderText>Financial System</C.HeaderText>
        </C.Header>      
        <C.Body>

          <InformationArea 
            currentMouth={currentMouth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />

          <InsertInformationArea createNewItem={createNewItem}/>

          <TableArea list={filteredList}/>

        </C.Body>
    </C.Container>
  );
}

export default App;
