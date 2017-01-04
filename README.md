### DUSK Website

Needs to be hooke up to victor hugo

#### Setup Instructions

First download [Caddy](https://caddyserver.com/download) for your server.

Then download [Hugo](http://gohugo.io/) and make sure it’s available in your
`$PATH`.

Create a Caddyfile with the following config:
```
https://www.justdusk.com {
    gzip
    root /home/devops/site
    git git@github.com:we-are-next/next-website.git {
       interval 600
       then hugo --destination=/home/devops/site
    }
    expires {
        match .css$ 1y
        match .ico$ 1y
        match .woff$ 1y
        match .woff2$ 1y
        match .js$ 1m
        match .png$ 1m
        match .jpg$ 1m
        match .pdf$ 1i
        match .txt$ 1s
        match .html$ 5i30s
    }

    minify

    errors {
        404 404.html
    }
}
#redirection
http://139.59.170.79:80 {
    redir https://www.justdusk.com{uri}
}
http://www.justdusk.com:80 {
    redir https://www.justdusk.com{uri}
}
http://www.www.justdusk.com:80 {
    redir https://www.justdusk.com{uri}
}
https://www.www.justdusk.com {
    redir https://www.justdusk.com{uri}
}
```

#### Deployment

The `master` branch is automatically deployed to Netlify over
at [https://www.www.justdusk.com](https://www.justdusk.com).