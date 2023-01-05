const generateHomePage = (res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My NODE assignment</title></head>");
  res.write("<body><h1>Hello, Login Here</h1></body>");
  res.write("<form action='/create-user' method='POST'>");
  res.write("<input type='text' name='user'>");
  res.write("<button type='submit'>Login</button>");
  res.write("</form>");
  res.write("</html>");
};

const generateUserLists = (res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Users</title></head>");
  res.write("<body>");
  res.write("<ul>");
  res.write("<li>User 1</li>");
  res.write("<li>User 2</li>");
  res.write("<li>User 3</li>");
  res.write("<li>User 4</li>");
  res.write("</ul>");
  res.write("</body>");
  res.write("</html>");
};

const generateCreateUser = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const bodyText = parsedBody.split("=")[1];
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My NODE assignment</title></head>");
    res.write(`<body><h1>${bodyText}</h1></body>`);
    res.write("</html>");
    return res.end();
  });
};

const generatePage = (req, res) => {
  const url = req.url;
  if (url === "/") {
    generateHomePage(res);
    return res.end();
  }
  if (url === "/users") {
    generateUserLists(res);
    return res.end();
  }

  if (url === "/create-user") {
    generateCreateUser(req, res);
  }
};

const routesHandler = (req, res) => {
  generatePage(req, res);
};

module.exports = routesHandler;
