import styled from "styled-components";

export const Container = styled.div`
`

export const Header = styled.div`
    background-color: darkblue;
    height: 150px;
    text-align: center;
`
export const HeaderText= styled.h1`
    margin: 0;
    padding: 0;
    color: white;
    padding-top: 30px
`
export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`

export const TableAreaStyles = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
`

export const TableHeadColumn = styled.th<{width?: number}>`
    padding: 10px;
    text-align: left;
    width: ${props => props.width? `${props.width}px` : 'auto'}
`

export const TableLine = styled.tr`
    
`

export const TableColumn = styled.td`
    padding: 10px 0;
`

export const Category = styled.div<{color: string}>`
    background-color: ${props => props.color? `${props.color}` : 'Black'};
    display: inline-block;
    border-radius: 5px;
    color: #FFF;
    width: 90%;
    text-align: center;
    height: 80%;
`

export const Value = styled.div<{color: string}>`
    color: ${props => props.color && `${props.color}`};
    font-weight: 600;
    font-size: 20px;
`

export const InfoArea = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top -40px;
    display: flex;
    align-items: center;
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`
export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`
export const MonthArrow= styled.div`
    width: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 25px;

`

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`

export const ResumeItem = styled.div`
    flex: 1; 
`

export const ResumeItemTitle= styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    marign-bottom: 5px;

`

export const ResumeItemInfo= styled.div<{color?: string}>`
    color: ${props => props.color ?? 'black'};
    text-align: center;
    font-weight: bold;
`

export const InsertInfoArea = styled.div`
    width: 980px;
    height: 10vw;
    margin: auto;
    margin-top: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    label{
        font-weight: bold;
    }

    button{
        width: 150px;
        height: 30px;
        background-color: rgb(95, 195, 212);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
    }
`

export const InfoAreaDiv = styled.div`
    display: flex;
    flex-direction: column;

    input, select{
        border: 1px solid rgb(95, 195, 212);
        border-radius: 4px;
        width: 150px;
        outline: none;
    }
`