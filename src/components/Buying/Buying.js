import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Buying = () => {
    const { serviceId } = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const bookItem = data.filter(td => td._id === serviceId)
    console.log(bookItem)



    return (
        <div>
            <h1> Buying order :{serviceId}</h1>
            <h1>This buying :{bookItem[0]?.name}</h1>


        </div>
    );
};

export default Buying;