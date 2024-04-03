import { useState } from "react"

const Form = ({ setModal }) => {

    const [form, setForm] = useState({})
    const url = new URL('https://63d304794abff88834170d21.mockapi.io/ss')
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };
    return (
        <div onClick={() => setModal(false)} className="mask">

            <form onClick={(event) => event.stopPropagation()} className="form" onSubmit={handleSubmit}>
                <div onClick={() => setModal(false)}>x</div>
                <input
                    name="title"
                    onChange={handleChange}
                    defaultValue={form.title || ''}
                    placeholder="title:" type="text" />
                <input
                    name="price"
                    onChange={handleChange}
                    defaultValue={form.price || ''}
                    placeholder="price:" type="text" />
                <input
                    name="oldPrice"
                    onChange={handleChange}
                    defaultValue={form.oldPrice || ''}
                    placeholder="oldPrice:" type="text" />
                <input
                    name="image"
                    onChange={handleChange}
                    defaultValue={form.image || ''}
                    placeholder="imaage:" type="text" />
                <textarea
                    placeholder="description" type="text" />
                <button type="submit">submit</button>
            </form>
        </div >
    )
}
export default Form