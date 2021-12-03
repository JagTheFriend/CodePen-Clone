import { useState } from "react";
import "./style.css";
import Editor from "./components/editor";

function App() {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `;
    return (
        <>
            <div className="pane top-pane">
                <Editor
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
                <Editor
                    language="js"
                    displayName="JavaScript"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div className="pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    );
}

export default App;
