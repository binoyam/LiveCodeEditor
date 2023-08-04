const html = document.getElementById("html-code");
const css = document.getElementById("css-code");
const js = document.getElementById("js-code");
const output = document.getElementById("output");

const elements = [html, css , js];
for (let elem of elements){
    elem.addEventListener('keyup', run);
}

function run() {
    const htmlCode = html.value;
    const cssCode = css.value;
    const jsCode = js.value;

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}