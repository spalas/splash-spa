import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const bookservice = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const bookItem = data.filter(td => td._id === id)
    console.log(bookItem)
    return (
        <div>
            <h2>This your book item</h2>
            <h2>name :{bookItem[0]?.name}</h2>
        </div>
    );
};

export default bookservice;