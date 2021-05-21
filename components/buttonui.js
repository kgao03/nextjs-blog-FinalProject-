import Image from "next/image"
import styles from './buttonui.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

export default function ButtonUI({icon, clickHandler, className}) {

    const btnuiClasses = cx({
        button_ui: true,
        close : icon === 'close'
    })

    return (
        <button 
            className={btnuiClasses}
            onClick={clickHandler}
        >
            <Image  
                src = {`/images/icon-${icon}.svg`}
                width = {50}
                height = {50}
                alt={`${icon} icon`}
            />
        </button>
    )
}