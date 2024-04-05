import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Garage } from "./components/Garage/Garage";
import { WinnersPage } from "./components/Winners/WinnerPage";

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/Garage" element={<Garage/>} />
                <Route path="/Winners" element={<WinnersPage/>} />
            </Routes>
        </div>
    );
}

export default App;
