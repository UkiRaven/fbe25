import React from "react";
import TinyMCE from "react-tinymce";

const styles = {
    container: {
        margin: "15px auto",
        width: "80%"
    },
    textBox: {
        fontFamily: "Lato, sans-serif",
    },
    titleInput: {
        padding: "5px",
        width: "100%",
        fontSize: "1.25em",
        boxSizing: "border-box"
    },
    titleInputContainer: {
        margin: "10px 0 10px 0",
    }
};
const TINYMCE_CONFIG = {
    'language'  : 'en',
    'height'    : '300',
    'theme'     : 'modern',
    'toolbar'   : 'bold italic underline strikethrough hr | bullist numlist | link unlink | undo redo | image  ',
    'menubar'   : false,
    'statusbar' : true,
    'resize'    : true,
    'plugins'   : 'image, lists, link,paste',
    'theme_modern_toolbar_location' : 'top',
    'theme_modern_toolbar_align': 'left',
    'content_css': '/styles.css'
};



export default class ArticleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: ""};
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    sendArticle(title, content) {
        fetch("/article/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({title: title, content: content})
            })
            .then(function(res){ return res.json(); })
            .then(function(data){ alert(JSON.stringify(data))})
    }

    handleSubmit(e) {
        if (!(this.state.content && this.state.title)) return;
        e.preventDefault();
        console.log("Value: " + this.state.content);
        this.sendArticle(this.state.title, this.state.content);
        this.setState({title: "", content: ""});
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }

    handleEditorChange(e) {
        this.setState({content: e.target.getContent()});
        console.log(e.target.getContent());
    }

    render() {
        return (
            <div style={styles.container}>
                <h3>Create your super cool and cute article!</h3>
                <form>
                    <div style={styles.titleInputContainer}>
                        <label>Title: </label>
                        <input value={this.state.title} style={styles.titleInput} onChange={this.handleTitleChange} type="text" name="title"/>
                    </div>
                    <TinyMCE content= {this.state.content}  onChange={this.handleEditorChange} config={TINYMCE_CONFIG} />
                    <input type="button" name="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>


            </div>
        )
    }
}