import * as http from "http";
import * as fs from "fs";
import * as url from "url";

const myserver = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()} : url:${req.url} Method: ${req.method} New Request received\n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);

    fs.appendFile("./log.txt", log, (err) => {
        if (err) console.error("Log write failed:", err);
      });

    // Respond immediately
    switch (myurl.pathname) {
        case '/':
            res.end("HomePage");
            break;
        case '/about':
            const qp = myurl.query.myname || "user";
            res.end(`This Server is created for practice purpose for ${qp}`);
            break;
        default:
            res.end("404 not found");
    }
});

myserver.listen(4000, () => console.log("Server started!!"));
