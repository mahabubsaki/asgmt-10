import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (services.length > 0) {
        localStorage.setItem('allServices', JSON.stringify(services))
    }
    return services
}
export default useServices