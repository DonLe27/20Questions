import React from 'react';
import '../styles/TextDisplay.css'
class TextDisplay extends React.Component {
    render() {
        return(
                <p className="textDisplay" >{this.props.contents}</p>
        );
    }
}
export default TextDisplay;