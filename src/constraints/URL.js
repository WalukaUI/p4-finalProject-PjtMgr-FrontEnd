
const BASE_URL=
process.env.NODE_ENV === "development"
?"http://localhost:3000"
:"https://tnt-project-management-app.onrender.com"

export default BASE_URL

// render backend= https://tnt-project-management-app.onrender.com
// heroku backend = https://project-manager-bkend.herokuapp.com