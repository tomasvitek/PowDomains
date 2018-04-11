safari.application.addEventListener("beforeSearch", function(event) {

  if (event.query && event.query.indexOf('.test') > -1) {
    // Prevent Safari from search
    event.preventDefault();

    var newurl = "http://" + event.query;
    event.target.url = newurl;
  }
}, true);

