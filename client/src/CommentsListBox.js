import React from 'react';
import CommentBox from './CommentBox.js';

const CommentsListBox = (props) => {
    const comments = props
        .comments
        .map((item, index) =>
            <CommentBox
                key={index}
                item={item}
            />)
    return (
        <div>
            {comments}
        </div>
    );
};

export default CommentsListBox;

