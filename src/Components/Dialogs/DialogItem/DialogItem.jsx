import { NavLink } from 'react-router-dom';
import './../Dialogs.css';


const SetActive = ({ isActive }) => isActive ? 'active-dialog-link' : 'noactive-dialog-link';
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div >
        <NavLink className={SetActive} to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;