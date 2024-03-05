import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const PersonDetail = () => {
    const { idx } = useParams()
    const [person, setPerson] = useState([]);

    const getPerson = () => {
    fetch(`https://reqres.in/api/users/${idx}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
    };
    useEffect(() => {
        getPerson();
    }, []);

    console.log(person);
    return (
        <div>
            persondetailssreturn
        </div>
    )
}

export default PersonDetail