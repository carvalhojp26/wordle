import {useState, useEffect } from 'react'

export default function App () {
    const [word, setWord] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
                const json = await response.json();
                setWord(json)
            } catch {
                console.error('Error fetching word');
            }
        }
        fetchData();
    },[] );

    return (
        <div>{word}</div>
    )
}