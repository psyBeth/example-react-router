import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PersonDetail = () => {
    const { idx } = useParams()
    const [person, setPerson] = useState([]);
    const navigate = useNavigate()

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
        <div className="container text-center mt-4">
            <img className="rounded" src={person?.avatar} alt="img" />
            <h5>
                {person?.first_name} {person?.last_name}
            </h5>
            <h6>{person?.email}</h6>
            <div>
                <button className="btn btn-warning" onClick={() => navigate(-1)}>Back</button>
                <button className="btn btn-danger" onClick={() => navigate("/")}>Home</button>
            </div>
        </div>
    )
}

export default PersonDetail