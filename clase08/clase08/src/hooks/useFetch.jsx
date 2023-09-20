import { useEffect, useState } from "react";

const UseFetch = (mock) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);


    const promiseCall = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mock)
        }, 1000);
    })

    useEffect(() => {
        promiseCall.then(resp => { setData(resp), setLoading(false) })
    }, [])

    return { data, loading };
}

export default UseFetch;