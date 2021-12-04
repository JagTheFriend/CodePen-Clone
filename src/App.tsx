import { useState, useEffect } from "react";
import "./style.css";
import Editor from "./components/editor";
import useLocalStorage from "./hooks/UseLocalStorage";

function App() {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState(``);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(`
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
            `);
        }, 100);
        return () => clearTimeout(timeOut);
    }, [html, css, js]);
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
