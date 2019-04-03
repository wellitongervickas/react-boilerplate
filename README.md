# React Boilerplate
##### Docker test localhost:3000
*Keep in mind to run npm install and npm run build before run docker*
###### Create a build
docker build -t DOCKERNAME .
###### Run docker image
docker run -p 3000:3000 DOCKERNAME 
##### Jest test coverage
- Components
- Helpers
- Store Actions
- Store Reduces
~~~~
Partial skip services and sagas
~~~~
##### Npm run scripts
- npm install *(Install packages)*
- npm start *(port 3000)*
- npm run dev *(port 8080)*
- npm run build *(build production)*
- npm run build:homolog *(build homologation)*
- npm run test *(run jest with watch mode)*
- npm run test:coverage *(run test to see coverage)*
- npm run test:build *(run test without watch mode)*
- npm run flow *(run flow validation)*
- npm run lint *(run lint validation)*
- npm run lint:fix *(run lint sanitize)*