import React from 'react';


function Hello({color, name, isSpecial}) {

    const style = {
        backgroundColor: 'black',
        color: color,
        fontSize: 24,
        padding: '1rem'
    }
    return (
        <>
            {isSpecial && <b>*</b>}
            <div style={style}>안녕하세요 {name}</div>
            <div>안녕하세요</div>
        </>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}

export default React.memo(Hello);