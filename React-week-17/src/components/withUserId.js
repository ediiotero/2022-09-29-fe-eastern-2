import React, {useState, useEffect} from 'react'

const withUserId = (Component) => {
    const NewComponent = ({userId, ...props}) => {
        const [user, setUser] = useState(null)

        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const data = await res.json()
            setUser(data)
        }

        useEffect(() => {
            getData()
        }, [])

        if(!user) return 'Loading...'

        return <Component {...props} user={user} />
    }

  return NewComponent;
}

export default withUserId