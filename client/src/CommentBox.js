import React from 'react';

const CommentBox = props => {
    return (
        <div>
            <span className="glyphicon glyphicon-trash pull-right"></span>
            <p id={props.key}>Writtten by: {props.item.user} - {props.item.text} &nbsp;</p>
        </div>
    )
}

export default CommentBox;