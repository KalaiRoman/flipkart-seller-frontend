import React, { useEffect, useState } from 'react';
function TokenId() {
    const [toknname, setTokenName] = useState("");
    useEffect(() => {
        if (localStorage.getItem("flip-token")) {
            setTokenName(JSON.parse(localStorage.getItem("flip-token")))
        }
    }, [toknname])
    return { toknname }
}
export default TokenId
