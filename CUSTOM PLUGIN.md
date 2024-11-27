nvm use 16

npm i -g yo
cd superset-frontend/packages/generator-superset
npm i
npm link

//Create a Hello-World Plugin 
mkdir /tmp/superset-plugin-chart-hello-world
cd /tmp/superset-plugin-chart-hello-world
yo @superset-ui/superset