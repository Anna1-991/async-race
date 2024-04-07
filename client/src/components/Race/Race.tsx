import React, { SetStateAction, useState } from "react";
import "./race.css";
import { CarImage } from "../../assets/carImg";


export const Race: React.FC = () => {
    
    const [cars, setCars] = useState<any[]>([]);
    const [carName, setCarName] = useState("");
    const [carColor, setCarColor] = useState("#000000");
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 6;

    const generateRandomCar = (): { name: string; color: string } => {
        const carBrands = [
            "Toyota",
            "Honda",
            "Chevrolet",
            "Volkswagen",
            "Audi",
            "Nissan",
            "Subaru",
            "Hyundai",
            "Kia",
            "Volvo",
        ];
        const carColors = [
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#ff00ff",
            "#00ffff",
            "#000000",
            "#ffffff",
            "#888888",
        ];

        const randomBrandIndex = Math.floor(Math.random() * carBrands.length);
        const randomColorIndex = Math.floor(Math.random() * carColors.length);

        return {
            name: carBrands[randomBrandIndex],
            color: carColors[randomColorIndex],
        };
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const newCar = { name: carName, color: carColor };
            setCars([...cars, newCar]);
            setCarName("");
            setCarColor("#000000"); // Reset color after adding a car
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCarColor(e.target.value);
    };

    const handleGenerateRandomCars = async (count: number) => {
        try {
            const randomCars = [];
            for (let i = 0; i < count; i++) {
                randomCars.push(generateRandomCar());
            }
            setCars([...cars, ...randomCars]);
        } catch (error) {
            console.error("Error generating random cars:", error);
        }
    };
    const handlePageChange = (pageNumber: SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
    return (
        <div className="race_container">
            <form className="form_container" onSubmit={handleSubmit}>
                <button>Race</button>
                <button>Reset</button>
                <button
                    type="button"
                    onClick={() => handleGenerateRandomCars(100)}
                >
                    Generate Cars
                </button>
                <input
                    type="text"
                    placeholder="Car Name"
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                />
                <input
                    type="color"
                    value={carColor}
                    onChange={() => handleColorChange}
                />
                <button type="submit">Create</button>
                <input
                    type="color"
                    value={carColor}
                    onChange={(e) => setCarColor(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
            {currentCars.map((car, index) => (
                <div className="car_container" key={index}>
                    <div>
                        <button>Remove</button>
                        <button>Select</button>
                    </div>
                    <div>
                        <CarImage />
                        <div>
                            <p>{car.name}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="pagination">
                {Array.from(
                    { length: Math.ceil(cars.length / carsPerPage) },
                    (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};
