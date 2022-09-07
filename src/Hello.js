import React from "react";

function Hello({color, name, isSpecial}){
    return (
        <>
        {isSpecial?
        <b><div style={{color:color}}>프룹스의 값은 {name}입니다.</div></b>
        :<div style={{color:color}}>프룹스의 값은 {name}입니다.</div>
        }
        
        </>
    )
}

Hello.defaultProps = {
    name :'이름없음'
}




export default Hello