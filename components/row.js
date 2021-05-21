import className from 'classnames/bind'

import Style from './row.module.scss';

let cx = className.bind(Style)

export default function Row({children, justifyContentCenter, justifyContentSpaceBetween}) {

    const rowClasses = cx ({
        row : true,
        ['justify-content-center']: justifyContentCenter,
        [`justify-content-space-between`]: justifyContentSpaceBetween
    })

    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}