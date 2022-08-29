import { useState } from 'react'

const HomeTest04 = () => {
    const [name, setName] = useState([])
    const [value, setValue] = useState('')
    const onChange = (e) => {
        const newValue = e.target.value
        setValue(newValue)
    }
    const onCreate = () => {
        if (value !== '') {
            const newName = name.find((user) => {
                return user === value
            })
            if (newName === undefined) {
                setName([
                    ...name,
                    value,

                ])
                setValue('')
            }
        }
    }
    const onDelete = (str) => {
        const newlist=name.filter((item)=>{
            return item !== str
        })
        setName(newlist)
    }


    return (
        <div>
            <input value={value} onChange={onChange}></input>
            <button onClick={onCreate}>Create</button>

            {name.map((item) => {
                return (
                    <div key={item}>
                        {item}
                        <button onClick={() => {onDelete(item)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeTest04;