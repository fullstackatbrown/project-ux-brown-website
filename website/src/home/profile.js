import React from 'react';
import '../App.css';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            name: this.props.name,
            role: this.props.role,
            class: this.props.class
        };
    }

    render() {
        return (
            <div>
                <img src={this.state.image}></img>
                <div className="role">
                    <div>{this.state.name}</div>
                    <div>{this.state.role} {this.state.class}</div>
                </div>
            </div>
        );
    }

}

export default Profile
