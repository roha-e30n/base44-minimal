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
