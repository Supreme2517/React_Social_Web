import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator} from '../../Utils/Validators/Validators';
import { FormControl } from '../../Common/FormsControls/FormsControls';


const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} />)

    let onAddPost = (values) => {
        debugger;
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const maxLength50 = maxLengthCreator(50);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field style={{width:'80%', height:'50px', resize: 'none'}} name="newPostText" child="textarea" component={FormControl}  placeholder="Add post" validate={[maxLength50]}/>
            </div>
            <div>
                <button className={s.btn}>Add post</button>
            </div>

        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm" })(AddNewPostForm)


export default MyPosts;