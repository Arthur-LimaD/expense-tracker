import * as C from '../App.styles'
import {formatCurrentMonth} from '../helpers/DateFilter'
import ResumeItem from './ResumeItem'

type Props = {
    currentMouth: string;
    onMonthChange: (T: string)=> void;
    income: number;
    expense: number;
    children?: React.ReactNode
}

const InformationArea = ({currentMouth, onMonthChange, income, expense}: Props)=> {
    
    const handlePreviousMonth = ()=> {
        let [year, month] = currentMouth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = ()=> {
        let [year, month] = currentMouth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    
 return (
 <C.InfoArea>

    <C.MonthArea>
        <C.MonthArrow onClick={handlePreviousMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMouth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
    </C.MonthArea>

    <C.ResumeArea>

        <ResumeItem title="Incomes" value={income}/>
        <ResumeItem title="Expenses" value={expense}/>
        <ResumeItem title="Budget" value={income - expense} color={(income - expense) < 0 ? 'red' : 'green'}/>

    </C.ResumeArea>

 </C.InfoArea>
 )
}

export default InformationArea