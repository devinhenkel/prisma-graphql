import jwt from 'jsonwebtoken'

const getUserToken = (userId) => {
    return jwt.sign({ userId: userId}, process.env.JWT_SECRET, { expiresIn: '7d' })
}

export { getUserToken as default }