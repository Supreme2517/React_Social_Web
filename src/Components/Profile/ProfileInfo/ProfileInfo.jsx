import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../Assets/Image/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg';
import ProflieStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            
            <div className={s.descriptionBlock}>
            <img alt = '' className={s.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
            <div className={s.status}>
            <ProflieStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            
            </div>         
        </div>
    )
}

export default ProfileInfo;