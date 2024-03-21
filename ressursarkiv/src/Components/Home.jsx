import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate()
    useEffect(() =>{navigate("/HTML")}, [])
    return (
        <>

        </>
    )
}