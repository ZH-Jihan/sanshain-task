import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [orders , setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() =>{
        fetch(`https://warm-wave-77383.herokuapp.com/order/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
            setOrders(data)
        });
    },[user]);
    return [orders , setOrders]
};

export default  Order;