# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Amazona ECommerce Website
amazona

PLEASE DO NOT SEND PULL REQUEST
ALL PRs WILL BE REJECTED UNTIL DECEMBER 2020
React & Node Tutorial - Full ECommerce in 9 Hours [2021]
Welcome to my React and Node tutorial to build a fully-functional e-commerce website exactly like amazon. Open your code editor and follow me for the next hours to build an e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS).

Demo Website
👉 Heroku : https://newamazona-final.herokuapp.com
👉 AWS : https://amazona.webacademy.pro
You Will Learn
HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
React: Components, Props, Events, Hooks, Router, Axios
Redux: Store, Reducers, Actions
Node & Express: Web API, Body Parser, File Upload, JWT
MongoDB: Mongoose, Aggregation
Development: ESLint, Babel, Git, Github,
Deployment: Heroku
Watch React & Node Tutorial
Run Locally

1. Clone repo
   $ git clone git@github.com:basir/amazona.git
   $ cd amazona
2. Setup MongoDB
   Local MongoDB
   Install it from here
   Create .env file in root folder
   Set MONGODB_URL=mongodb://localhost/amazona
   Atlas Cloud MongoDB
   Create database at https://cloud.mongodb.com
   Create .env file in root folder
   Set MONGODB_URL=mongodb+srv://your-db-connection
3. Run Backend
   $ npm install
   $ npm start
4. Run Frontend

# open new terminal

$ cd frontend
$ npm install
$ npm start 5. Seed Users and Products
Run this on chrome: http://localhost:5000/api/users
It returns admin email and password
Run this on chrome: http://localhost:5000/api/products
It creates 6 sample products 6. Admin Login
Run http://localhost:3000/signin
Enter admin email and password and click signin
Support
Q/A: https://webacademy.pro/amazona
Contact Instructor: Basir

Lessons
Introduction to this course
what you will build
what you will learn
who are audiences
Install Tools
Code Editor
Web Browser
VS Code Extension
Website Template
Create amazona folder
create template folder
create index.html
add default HTML code
link to style.css
create header, main and footer
style elements
Display Products
create products div
add product attributes
add link, image, name and price
Create React App
npx create-react-app frontend
npm start
Remove unused files
copy index.html content to App.js
copy style.css content to index.css
replace class with className
Share Code On Github
Initialize git repository
Commit changes
Create github account
Create repo on github
connect local repo to github repo
push changes to github
Create Rating and Product Component
create components/Rating.js
create div.rating
style div.rating, span and last span
Create Product component
Use Rating component
Build Product Screen
Install react-router-dom
Use BrowserRouter and Route for Home Screen
Create HomeScreen.js
Add product list code there
Create ProductScreen.js
Add new Route from product details to App.js
Create 3 columns for product image, info and action
Create Node.JS Server
run npm init in root folder
Update package.json set type: module
Add .js to imports
npm install express
create server.js
add start command as node backend/server.js
require express
create route for / return backend is ready.
move products.js from frontend to backend
create route for /api/products
return products
run npm start
Load Products From Backend
edit HomeScreen.js
define products, loading and error.
create useEffect
define async fetchData and call it
install axios
get data from /api/products
show them in the list
create Loading Component
create Message Box Component
use them in HomeScreen
Install ESlint For Code Linting
install VSCode eslint extension
npm install -D eslint
run ./node_modules/.bin/eslint --init
Create ./frontend/.env
Add SKIP_PREFLIGHT_CHECK=true
Add Redux to Home Screen
npm install redux react-redux
Create store.js
initState= {products:[]}
reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
export default createStore(reducer, initState)
Edit HomeScreen.js
shopName = useSelector(state=>state.products)
const dispatch = useDispatch()
useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
Add store to index.js
Add Redux to Product Screen
create product details constants, actions and reducers
add reducer to store.js
use action in ProductScreen.js
add /api/product/:id to backend api
Handle Add To Cart Button
Handle Add To Cart in ProductScreen.js
create CartScreen.js
Implement Add to Cart Action
create addToCart constants, actions and reducers
add reducer to store.js
use action in CartScreen.js
render cartItems.length
Build Cart Screen
create 2 columns for cart items and cart action
cartItems.length === 0 ? cart is empty
show item image, name, qty and price
Proceed to Checkout button
Implement remove from cart action
Implement Remove From Cart Action
create removeFromCart constants, actions and reducers
add reducer to store.js
use action in CartScreen.js
Create Sample Users In MongoDB
npm install mongoose
connect to mongodb
create config.js
npm install dotenv
export MONGODB_URL
create models/userModel.js
create userSchema and userModel
create userRoute
Seed sample data
Create Sample Products In MongoDB
create models/productModel.js
create productSchema and productModel
create productRoute
Seed sample data
Create Sign-in Backend
create /signin api
check email and password
generate token
install json web token
install dotenv
return token and data
test it using postman
Design SignIn Screen
create SigninScreen
render email and password fields
create signin constants, actions and reducers
Update Header based on user login
Implement SignIn Action
create signin constants, actions and reducers
add reducer to store.js
use action in SigninScreen.js
Create Register Screen
create API for /api/users/register
insert new user to database
return user info and token
create RegisterScreen
Add fields
Style fields
Add screen to App.js
create register action and reducer
check validation and create user
Create Shipping Screen
create CheckoutSteps.js component
create shipping fields
implement shipping constant, actions and reducers
Create Payment Screen
create payment fields
implement shipping constant, actions and reducers
Design Place Order Screen
design order summary fields
design order action
Create Place Order API
createOrder api
create orderModel
create orderRouter
create post order route
Implement PlaceOrder Action
handle place order button click
create place order constants, action and reducer
Create Order Screen
build order api for /api/orders/:id
create OrderScreen.js
dispatch order details action in useEffect
load data with useSelector
show data like place order screen
create order details constant, action and reducer
Add PayPal Button
get client id from paypal
set it in .env file
create route form /api/paypal/clientId
create getPaypalClientID in api.js
add paypal checkout script in OrderScreen.js
show paypal button
Implement Order Payment
update order after payment
create payOrder in api.js
create route for /:id/pay in orderRouter.js
rerender after pay order
Display Orders History
create customer orders api
create api for getMyOrders
show orders in profile screen
style orders
Display User Profile
create user details api
show user information
Update User Profile
create user update api
update user info
Create Admin View
Create Admin Menu
Create Admin Middleware in Backend
Create Admin Route in Frontend
List Products
Create Product List Screen
Add reducer to store
show products on the screen
Create Product
build create product api
build Create Product button
define product create constant, action and reducer
use action in Product List Screen
Build Product Edit Screen
create edit screen
define state
create fields
load product details
add to routes
Update Product
define update api
define product update constant, action and reducer
use action in Product Edit Screen
Upload Product Image
npm install multer
define upload router
create uploads folder
Handle frontend
Delete Product
create delete api in backend
create delete constants, action and reducer
use it in product list screen
List Orders
create order list api
create Order List Screen
Add reducer to store
show products on the screen
Delete Order 2. create delete order action and reducer 3. add order delete action to order list
Deliver Order
create constant, actions and reducers for deliver order
add order deliver action to order details screen
Publish To Heroku
Create git repository
Create heroku account
install Heroku CLI
heroku login
heroku apps:create amazona
Edit package.json for build script
Create Procfile
Create mongodb atlas database
Set database connection in heroku env variables
Commit and push
