<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="/styles/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HeroPedia</title>
</head>
<body class="container">
    <nav class="navbar container" id="nav">
        <div class="container">
          <a class="navbar-brand" id="brand" href="#">
            <img src="/images/logo.png" alt="Logo" width="55" height="54" class="d-inline-block align-text-center" >
            <h4 class="d-inline">HeroPedia</h4>
          </a>
          <ul class="d-flex flex-row gap-5 nav-list mt-2">
            <li><a class="list-group-item" href="/">Home</a></li>
            <li><a class="list-group-item" href="/about">About Us</a></li>
          </ul>
        </div>
      </nav>
      <form action="/" class="container d-flex flex-column justify-content-center align-items-center gap-3" method="post">
        <input type="text" name="name" placeholder="Enter Superhero Name..." />
        <input type="submit" value="search" />
      </form>
      <% if (locals.content) { %>
        <% console.log(content.not_found) %>
        <% if(content.not_found == true) { %>
          <div class="container text-center h-100 mb-5 pb-5">
            <h1><%= content.msg %></h1>
          </div>
        <% } else { %>
          <div class="superhero-details container d-flex flex-wrap align-items-center justify-content-center h-100 gap-3">
            <img src="<%= content.image.url %>" alt="<%= content.name %>" class="cols-6 img-circle" >
            <ul class="cols-6 col-sm-8 container" id="content">
              <li><span class="content-title">Name:</span> <%= content.name %></li>
              <li><span class="content-title">Gender:</span> <%= content.appearance.gender %></li>
              <li><span class="content-title">Alignment:</span> <%= content.biography.alignment %></li>
              <li><span class="content-title">Occupation:</span> <%= content.work.occupation %></li>
              <li><span class="content-title">Relatives:</span> <%= content.connections.relatives || 'N/A' %></li>
              <li><span class="content-title">Aliases:</span><ul>  
                <% content.biography.aliases.forEach(alias => { %>
                <li><%= alias %></li>
                <% }); %>
            </ul></li>
             
              <li><span class="content-title">Intelligence:</span> <%= content.powerstats.intelligence %></li>
              <li><span class="content-title">Strength:</span> <%= content.powerstats.strength %></li>
              <li><span class="content-title">Speed:</span> <%= content.powerstats.speed %></li>
            </ul>
          </div>
        <% } %>
      <% } else { %>
        <div class="container d-flex justify-content-center align-items-center h-100">
          <h1>Search your favorite Superhero...</h1>
        </div>
      <% } %>
      
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
