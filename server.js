var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/profile-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile-one.html'));
});

app.get('/:profileName', function (req, res) {
  var profileName = req.params.profileName;
  res.send(createTemplate(profiles[profileName]));
});

var profiles = {
  'profile-two': {
    title: '<title>Profile | Arun2Gap</title>',
    heading: '<h3>I\'m profile-two page content</h3>',
    date: '<h6>15-Aug-2020</h6>',
    profileName: '<p>My name: apitchai</p>',
    exp: `<ol>
  <li>Founder of GapIn Corp.</li>
  <li>Technology Activitist</li>
</ol>`
  }
}
function createTemplate(data) {
  var title = data.title;
  var heading = data.heading;
  var date = data.date;
  var profileName = data.profileName;
  var exp = data.exp;
  var htmlTemplate =
    `
  <html>
  <head>
      ${title}
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='/ui/style.css' rel='stylesheet'/>
  </head>
  <body>
      <div class="container">
          <a href='/'>Home</a>
          <hr />
          ${heading}
          ${date}
          <h1>Bio</h1>
          ${profileName}
          <h1>Expertise</h1>
          ${exp}
      </div>
  </body>
  </html>`;
  return htmlTemplate;
}
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
