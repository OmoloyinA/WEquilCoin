import { useRouter } from 'next/router'

const ActiveLink = ({ children, href }) => {
    const router = useRouter()
    const style = {
        marginRight: 10,
        color: router.asPath === href ? '#A5F7C6' : null,
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

export default ActiveLink