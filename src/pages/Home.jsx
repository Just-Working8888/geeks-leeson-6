import { useEffect, useState } from "react";
import { useTheme } from "../App";
import Protected from "../components/Proteced";
import Card from "../components/Card";

function Home() {
    const isDarkMode = useTheme()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('')
    const url = new URL('https://63d304794abff88834170d21.mockapi.io/ss')
    url.searchParams.append('title', search)

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response id error reques')
                }
                return response.json()
            })
            .then(dataa => {
                setData(dataa)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [search])

    if (loading) {
        return 'loading ....'
    }

    return (

        <div className={`App ${isDarkMode ? "dark" : "ligth"}`}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" />

            <div className='container'>
                {
                    data?.map((item) =>
                        <Protected>
                            <Card
                                key={item.id}
                                price={item.price}
                                oldPrice={item.oldPrice}
                                description={item.description}
                                title={item.title}
                                img={item.image}
                            />
                        </Protected>
                    )

                }
            </div>
        </div>


    );
}

export default Home;