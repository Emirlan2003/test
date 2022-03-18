import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/action-creators/action-creators';
import './User.css'


const User = () => {
    const { user } = useSelector(state => state.data)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUser())
    }, [])

    return (
        <div className='mainBlock'>
            {
                user ?
                user.map((item) => (
                    <div key={item.id}>
                       <img src={item.avatar} alt="" />
                       <h1>{item.name}</h1>
                       <div className='childBlock'>
                            <h2>location: {item.location}</h2>
                            <h2>email: {item.email}</h2>
                            <h3>number: {item.number}</h3>
                       </div>
                       <div>{item.bio}</div>
                    </div>
                ))
                :
                null
            }
        </div>
    );
};

export default User;