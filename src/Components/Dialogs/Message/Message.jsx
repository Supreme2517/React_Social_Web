import s from './../Dialogs.module.css';
import './../Dialogs.css';


const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )

}

export default Message;