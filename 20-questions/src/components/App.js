import React from 'react';
import FunButton from './FunButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import TextDisplay from './TextDisplay'
const questions = [
    "Ya like jazz?",
    "Mood?", 
    "What is your favorite memory from elementary school?"
]
const games = [
    "20 Questions, let's get spicy ;)",
    "Two truths, one lie.", 
    "Secret for secret?",
    "Go through each year the 2000's and share one story."
]
const stories = [
    "What does a Dog Chemist do to bones? Barium!",
    "What kind of dog does Dracula have? A bloodhound",
    "Hi hi hi hi hi hi...call me thanks :)"
]
const toolbarStyle = {
    margin: 'auto',
    width: '50%',
    display: 'table-row',
}

const toolbarContainer = {
    display: 'table',
    margin: 'auto',
}
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contents:"Fun stuffs here!"
        }
    }

    changeContents(label){
        console.log(label)
        if(label === "question"){
            let i = Math.floor(Math.random() * questions.length); 
            this.setState({
                contents:questions[i]
            })
        }
        if(label === "game"){
            let i = Math.floor(Math.random() * games.length); 
            this.setState({
                contents:games[i]
            })
        }
        if(label === "story"){
            let i = Math.floor(Math.random() * stories.length);
            this.setState({
                contents:stories[i]
            })
        }

    }
    render() {
        return(
            <html>
                <body style={toolbarContainer}>
                    <ButtonToolbar style={toolbarStyle}>
                        <FunButton label="question" title="Question." variant="primary" changeContents={this.changeContents.bind(this)}/>
                        <FunButton label="game" title="Wanna play a game?" variant="outline-primary" changeContents={this.changeContents.bind(this)}/>
                        <FunButton label="story" title="Random!" variant="info" changeContents={this.changeContents.bind(this)}/>
                    </ButtonToolbar>
                    <TextDisplay contents={this.state.contents}/>
              </body>
            </html>
        );
    }
}
export default App;