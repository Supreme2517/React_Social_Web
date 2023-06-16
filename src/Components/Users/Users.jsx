import React from "react";
import s from './Users.module.css';
import userPhoto from '../Assets/Image/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg';
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";



let Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, ...props}) => {

    return <div>
        <Paginator currentPage = {currentPage} onPageChanged = {onPageChanged} 
        totalItemsCount = {totalItemsCount} pageSize = {pageSize} />
        {
            props.users.map(u => <div key={u.id} className={s.users}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt='' className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)} 
                                onClick={() => {props.unfollow(u.id)}}
                                className={s.btn}>
                            Unfollow </button>
                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => {props.follow(u.id)}}
                                className={s.btn}>
                            Follow </button>}
                    </div>
                </span>
                <span>
                    <span>
                        <h3 style={{paddingTop: '10px', marginLeft:'10px'}}>{u.name}</h3>
                        <div>Status: {u.status 
                        ?u.status
                        :'No statusss'}</div>
                    </span>
                </span>
            </div>
            )
        }
        <Paginator currentPage = {currentPage} onPageChanged = {onPageChanged} 
        totalItemsCount = {totalItemsCount} pageSize = {pageSize} />
    </div>
}

export default Users;