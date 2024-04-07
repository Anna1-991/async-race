import React, { SetStateAction } from "react";

interface Car {
    name: string;
    color: string;
}

export const GenerateRandomCar  = (): Car => {


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

    const generateRandomCar = (): { name: string; color: string } => {
        const randomBrandIndex = Math.floor(Math.random() * carBrands.length);
        const randomColorIndex = Math.floor(Math.random() * carColors.length);

        return {
            name: carBrands[randomBrandIndex],
            color: carColors[randomColorIndex],
        };
    };

    return generateRandomCar();
};

export const handleSubmit = async (event: React.FormEvent) => {
    // Implement your handleSubmit logic
};

export const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Implement your handleColorChange logic
};

export const handleGenerateRandomCars = async (count: number) => {
    // Implement your handleGenerateRandomCars logic
};

export const handlePageChange = (pageNumber: SetStateAction<number>) => {
    // Implement your handlePageChange logic
};
