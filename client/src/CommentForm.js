import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            text: ""
        };

        console.log(this.state);
    }

    // componentDidMount = () => {
    //     this.setState(
    //         { amt: this.props.amtVal,
    //             cat: this.props.catVal,
    //             descr: this.props.descrVal,
    //             onBtnClick: this.props.onBtnClick
    //         })
    // }

    changeComment = event => {
        this.setState({[event.target.id]:event.target.value});
        //e.target.id <-- the element id (which matches our state)
        //e.target.value <-- the element value
        //[e.target.id] <-- is the way to define a dynamic var name
    }

    render() {
        return (
            <form action="#" id="commentForm" onSubmit={this.props.onSubmitComment}>
                <div className="input-group">
                    <input
                        id="user"
                        type="text"
                        className="form control"
                        placeholder="User" 
                        required
                        value={this.state.user}
                        onChange={(event) => { this.setState({user: event.target.value}) }}
                    />
                    <input
                        id="commentText"
                        type="text"
                        className="form control"
                        placeholder="Enter comment" 
                        required
                        value={this.state.text}
                        onChange={(event) => { this.setState({text: event.target.value}) }}
                    />
                    <button className="btn btn-default" type="submit">Go!</button>
                </div>
            </form>
        );
    }
}

export default CommentForm;
