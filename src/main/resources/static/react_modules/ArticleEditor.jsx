import React from "react";
import {hashHistory} from "react-router";
import TinyMCE from "react-tinymce";

const styles = {
    container: {
        margin: "15px auto",
        width: "80%"
    },
    titleInput: {
        padding: "5px",
        width: "100%",
        fontSize: "1.25em",
        boxSizing: "border-box"
    },
    titleInputContainer: {
        margin: "10px 0 10px 0",
    },
    submit: {
        height: "50px",
        width: "120px",
        margin: "15px auto",

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
    'content_css': '/tinymce.css'
};



export default class ArticleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: ""};
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    goHome() {
        hashHistory.push("/");
    }

    sendArticle(title, content) {
        let href = "http://192.168.1.101:8082/api/accounts/" + this.props.user.id;
        fetch("api/articles/",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    author: href,
                    title: title,
                    content: content,
                    creationDate: new Date()
                })
            })
            .then(function(res){ return res.json(); })
            .then(function(data){ console.log(JSON.stringify(data))})
    }

    handleSubmit(e) {
        if (!(this.state.content && this.state.title)) return;
        e.preventDefault();
        this.sendArticle(this.state.title, this.state.content);
        this.setState({title: "", content: ""});
        this.goHome();
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }

    handleEditorChange(e) {
        this.setState({content: e.target.getContent()});
    }

    render() {
        if (this.props.user.authenticated) return (
            <div style={styles.container}>
                <h2>Create your super cool and cute article!</h2>
                <form>
                    <div style={styles.titleInputContainer}>
                        <label>Title: </label>
                        <input value={this.state.title} style={styles.titleInput} onChange={this.handleTitleChange} type="text" name="title"/>
                    </div>
                    <TinyMCE content= {this.state.content}  onChange={this.handleEditorChange} config={TINYMCE_CONFIG} />
                    <input style={styles.submit} className="button" type="button" name="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>


            </div>
        );
        else return <div className="block" style={styles.container}>"You are not authenticated"</div>;
    }
}