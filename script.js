function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    const previewFrame = document.getElementById("previewFrame");
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
    
    previewDocument.open();
    previewDocument.write(`
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
        </html>
    `);
    previewDocument.close();
}

function exportCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    const combinedCode = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
        </html>
    `;

    // Create a Blob with the combined code
    const blob = new Blob([combinedCode], { type: "text/html" });

    // Create a temporary anchor element
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "code.html"; // Set the filename for the downloaded file
    a.click(); // Trigger the click event to download the file
}
