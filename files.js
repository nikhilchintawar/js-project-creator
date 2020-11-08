let htmlFile = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>TEMPLATE</title>
    <link rel="shortcut icon" href="http://www.google.com/s2/favicons?domain=nikhilchintawar.github.io" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    

    <!-- script -->
    <script src="./index.js"></script>
</body>
</html>`;

let cssFile = `html{
    box-sizing: border-box;
}

body{
    margin: 0;
    min-height: 100vh;
}`;

let jsFile = `console.log("This is default template.")`;

let messages = ["open your favourite editor AND", "Happy Coding..."]

module.exports = {htmlFile, cssFile, jsFile, messages};