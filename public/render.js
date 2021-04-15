"use strict";

fetch("./main-page/index.html").then(res => {
    res.text().then(data => {
        document.open();
        document.write(data);
        document.close();
    });
}).catch(console.error);
