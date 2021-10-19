import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToMarkdown from 'draftjs-to-markdown';

const MarkdownEditor = (props) => {

  const initialValue = props.value
  const onChange = props.onChange

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = editorState => {
      setEditorState(editorState)
    //   onChange(
    //     JSON.stringify(
    //       (convertToRaw(
    //         editorState.getCurrentContent()
    //       )),null,4
    //     )
    //   )
  }
  return ( 
    <>
      <Editor 
        editorState={editorState}
        // defaultContentState={initialValue}
        toolbarClassName="markdown-editor__toolbar"
        wrapperClassName="markdown-editor__wrapper"
        editorClassName="markdown-editor__editor-area"
        onEditorStateChange={onEditorStateChange}
      />
    <textarea
          disabled
          value={editorState && draftToMarkdown((convertToRaw(editorState.getCurrentContent())))}
        />
</>
  );
};

export default MarkdownEditor