--- Base44 Minimal ---

cd base44-minimal

npm install
npm install -g base44@latest
npm install @base44/sdk --save
npm run build
npm run preview

base44 login
  https://app.base44.com/login/device
base44 link
  create
base44 entities push
base44 site deploy
base44 deploy
