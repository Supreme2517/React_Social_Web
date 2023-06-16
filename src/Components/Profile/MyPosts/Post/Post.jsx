import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.items}>
                <div className={s.item}>
                    <img alt='' src="https://www.pngkit.com/png/detail/113-1136728_da-monk-by-mnk-crew-via-behance-da.png" />
                    {props.message}
                </div>
            </div>

        </div>
    )
}

export default Post;