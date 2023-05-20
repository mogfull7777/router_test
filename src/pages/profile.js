import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {

    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = async () => {

        try {

            const token = await localStorage.getItem("token");

            const config = {
                headers : {
                    authorization : "Bearer " + token.toString()
                }
            }

            const profileInfo = await axios.get('http://localhost:3000/api/auth', config)

            console.log("^^^^^^^^^^^^^^^", profileInfo)

        //     이 토큰이 아니고 쿠키에 있는 토큰을 호출해야 할까?


        } catch (err) {
            console.log(err.massage)
        }

    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div>
            <h1>profile</h1>
        </div>
    );
};

export default Profile;