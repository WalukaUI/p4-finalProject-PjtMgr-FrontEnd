
const BASE_URL=
process.env.NODE_ENV === "development"
?"http://localhost:3000"
:"https://project-manager-bkend.herokuapp.com"

export default BASE_URL
