import imagenes from "../../../public/img/imagenes";
import React, { useState } from "react";
import "./pacientes.css";

function Pacientes() {
    const [cardData, setCardData] = useState([
        { id: 1, nombre: "John" },
        { id: 2, nombre: "Jane" },
        // Agregar más cartas aquí si es necesario
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCardData, setNewCardData] = useState({
        nombre: "",
    });

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Función para agregar una nueva carta
    const addCard = () => {
        // Validar que el campo de nombre no esté vacío antes de agregar la carta
        if (newCardData.nombre) {
            // Generar un nuevo ID para la carta
            const newId = Math.max(...cardData.map((card) => card.id), 0) + 1;

            // Agregar la nueva carta al estado
            setCardData([...cardData, { ...newCardData, id: newId }]);
            closeModal();
            // Restaurar el valor del formulario después de agregar una carta
            setNewCardData({
                nombre: "",
            });
        } else {
            alert("Por favor, complete el campo de nombre.");
        }
    };

    // Función para eliminar una carta por ID
    const handleDeleteCard = (id) => {
        const shouldDelete = window.confirm(
            "¿Estás seguro de que deseas borrar esta carta?"
        );
        if (shouldDelete) {
            const updatedCards = cardData.filter((card) => card.id !== id);
            setCardData(updatedCards);
        }
    };

    return (
        <div className="container">
            <img src={imagenes.logo} alt="Logo" className="logo-image" />
            <div className="header">
                <div className="card-count"><img src={imagenes.grupo} alt="" className="count-img"/> {cardData.length}</div>
                <input type="text" placeholder="Buscar" className="search-input" />
                <button className="add-button" onClick={openModal}>
                    Agregar
                </button>
                <div className="clear"></div>
            </div>
            <div className="card-container">
                {cardData.map((data) => (
                    <div key={data.id} className="card">
                        <h3>Nombre: {data.nombre}</h3>
                        <div className="card-buttons">
                            <button
                                className="delete-button"
                                onClick={() => handleDeleteCard(data.id)}
                            >
                                Borrar
                            </button>
                            <button className="enter-button">Entrar</button>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <img
                            src={imagenes.logo}
                            alt="Logo"
                            className="logo-image-modal"
                        />
                        <h2>Agregar Paciente</h2>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={newCardData.nombre}
                            onChange={(e) =>
                                setNewCardData({ ...newCardData, nombre: e.target.value })
                            }
                            maxLength={30}
                        />
                        <div className="Buttons">
                            <button onClick={addCard} className="accept-button button-left">
                                Agregar
                            </button>
                            <button className="cancel-button button-right" onClick={closeModal}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Pacientes;
