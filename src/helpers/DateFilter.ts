import { Item } from "../data/Items"

export const getCurrentMouth = ():string => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMouth = (list: Item[], date: string):Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');
    
    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() + 1 === parseInt(month)){
            newList.push(list[i])
        }
    }

    return newList;
}

export const formatCurrentMonth = (currentMouth: string):string=>{
    let [year, month] = currentMouth.split('-');
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return `${months[parseInt(month) - 1 ]} ${year}`
}