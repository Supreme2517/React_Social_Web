import React, { useEffect, useState } from 'react';
import '../../../App.css'


const ProflieStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span className='status_text' onClick = {activateEditMode}>{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange ={onStatusChange} autoFocus={true} onBlur = {deactivateEditMode}
                    value={status}/>
                </div>
            }
        </div>

    )
}

export default ProflieStatusWithHooks;