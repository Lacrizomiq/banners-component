
import {AiFillCheckCircle, AiFillWarning} from 'react-icons/ai'
import { BsFillXCircleFill, BsFillInfoCircleFill } from 'react-icons/bs'

const variants = {
    congratulations : {
        title: 'Congratulations !',
        background: '#ECFDF5',
        color: '#065F46',
        icon: <AiFillCheckCircle color='#34D399'/>
    },

    attention : {
        title: 'Attention',
        background: '#FFFBEB',
        color: '#92400E',
        icon: <AiFillWarning color='#FBBF24'/>
    },
    
    problem: {
        title: "There is a problem with your application",
        background: "#FEF2F2",
        color: "#92400E",
        icon: <BsFillXCircleFill color='#F87171'/>
    },

    update: {
        title: "Update available",
        background: "#EFF6FF",
        color: "#1E40AF",
        icon: <BsFillInfoCircleFill color='#60A5FA' />
    }

}

export default function Banner({ variant }) {

    const {title, background, color, icon} = variants[variant]

    const bannerStyle = {
        backgroundColor: background,
        color: color,
        width: '896px',
        padding: '16px',
        fontWeight: "bold"
    }

    return (
        <>
        <div style={bannerStyle} className='banner'>
            {icon} {title}
        </div>
        </>
    )

}