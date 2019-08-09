import React from 'react';
import Button from 'react-bootstrap/Button'
import '../styles/FunButton.css'
class FunButton extends React.Component {
    render() {
        return(
                <Button onClick={(i)=> this.props.changeContents(this.props.label)} className="funButton" size="lg" variant={this.props.variant}>{this.props.title}</Button>
        );
    }
}
export default FunButton;