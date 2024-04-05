import "./race.css";
import car from "../../assets/car-2901.png";
import { useState } from "react";

export const Race: React.FC = () => {
    const [carName, setCarName] = useState("");
    // const [carColor, setCarColor] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(carName);
    };

    return (
        <div className="race_container">
            <form className="form_container" onSubmit={handleSubmit}>
                <button>Race</button>
                <button>Reset</button>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setCarName(e.target.value)}
                />
                <input
                    type="color"
                    name=""
                    id=""
                    onChange={(e) => setCarName(e.target.value)}
                />
                <button>Create</button>
                <input type="text" name="" id="" />
                <input type="color" name="" id="" />
                <button>Update</button>
                <button>Generate Cars</button>
            </form>
            <div className="car_container">
                <div>
                    <button>Remove</button>
                    <button>Select</button>
                </div>
                <div>
                    <img src={car} alt="car" className="carImg" />
                    <p>{carName}</p>
                </div>
            </div>
        </div>
    );
};
