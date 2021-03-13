import api from './api'

const PORT = process.env.PORT

api.listen(PORT, () => console.log(`Server running on http://localhost.com/${PORT}`))