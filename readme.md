# Base44 Minimal App

## Install

```
cd base44-minimal
npm install
npm install -g base44@latest             # install Base44 SDK
npm install @base44/sdk --save           # install Base44 SDK
npm install @tailwindcss/vite            # install Tailwind CSS
npm install vite-plugin-handlebars --save-dev  # install Handlebars Templates 
base44 login                             # https://app.base44.com/login/device
base44 link                              # create
```

## Build

```
npm run build                            # build ./dist/assets/index-XXX.js and index-XXX.css
npm run preview                          # preview at http://localhost:4173/
base44 entities push                     # deploy database tables
base44 site deploy --yes                 # deploy frontend files (html, js, css, ...)
base44 deploy                            # deploy all
```

## Files

```
base44/                                  # Backend
├── config.jsonc                         # Project settings
└── entities/                            # Data schemas
    └── task.jsonc                       # Task entity

de/                                      # Deutsch
└── index.html                           # Template-Proxy /de/

en/                                      # Englisch
└── index.html                           # Template-Proxy /en/

src/                                     # Frontend
├── page-content/                        # page Content
|   └── landing.js                       # Landing-Page Content
├── page-template/                       # Page Template
|   └── landing.html                     # Landing-Page Template
├── style.css                            # main css
├── main.js                              # index.html
└── about.js                             # about.html

public/                                  # Static
└── readme.txt                           # readme

index.html                               # index.html
about.html                               # about.html
vite.config.js                           # Build
```

## Output

```
dist/index.html                   0.57 kB │ gzip:  0.35 kB
dist/about.html                   0.57 kB │ gzip:  0.35 kB
dist/readme.txt                   0.04 kB │ gzip:  0.04 kB  (public)
dist/en/index.html                0.80 kB │ gzip:  0.48 kB
dist/de/index.html                0.81 kB │ gzip:  0.48 kB
dist/assets/client-D7cw3iT_.css   9.55 kB │ gzip:  2.66 kB  Global CSS
dist/assets/client--_wcQmiP.js   97.36 kB │ gzip: 33.50 kB  Global JS
dist/assets/index-DRHHX4Mm.js     0.87 kB │ gzip:  0.46 kB  index.js
dist/assets/about-Dag0Ko5z.js     0.21 kB │ gzip:  0.20 kB  about.js
dist/assets/landing-W4Zg2qt_.js   0.21 kB │ gzip:  0.21 kB  landing.js
```
