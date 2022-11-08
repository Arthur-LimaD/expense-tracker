import * as C from '../App.styles'

type Props = {
    title: string;
    value: number;
    color?: string;
    children?: React.ReactNode
}

const ResumeItem = ({title, value, color} : Props)=> {
    return (
    <C.ResumeItem>
        <C.ResumeItemTitle>
            {title}
        </C.ResumeItemTitle>

        <C.ResumeItemInfo color={color}>
            $ {value}
        </C.ResumeItemInfo>

    </C.ResumeItem>
    )
}

export default ResumeItem