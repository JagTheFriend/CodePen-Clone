import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props: {
    language: string;
    displayName: string;
    value: string;
    onChange: Function;
}) {
    const { language, displayName, value, onChange } = props;
    const [open, setOpen] = useState(true);
    function handleChange(editor: any, data: any, value: string) {
        onChange(value);
    }
    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className="editor-title">
                {displayName}
                <button onClick={() => setOpen((prevOpen) => !prevOpen)}>O/C</button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lineNumbers: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                }}
            />
        </div>
    );
}
