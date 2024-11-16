import React, { useEffect, useState } from "react";
import { api } from "./services/api";
import FormularioReserva from "./components/FormularioReserva";
import TablaReservas from "./components/TablaReservas";

const App = () => {
  const [reservas, setReservas] = useState([]);

  // Obtener reservas del backend
  const fetchReservas = async () => {
    try {
      const response = await api.get("");
      setReservas(response.data);
    } catch (error) {
      console.error("Error al obtener las reservas:", error);
    }
  };

  // Crear una nueva reserva
  const crearReserva = async (reserva) => {
    try {
      await api.post("", reserva);
      fetchReservas();
    } catch (error) {
      console.error("Error al crear la reserva:", error);
    }
  };

  // Eliminar una reserva
  const eliminarReserva = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchReservas();
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
    }
  };

  // Actualizar las fechas de una reserva
  const actualizarFechas = async (id, fechas) => {
    try {
      await api.put(`/${id}`, fechas);
      fetchReservas();
    } catch (error) {
      console.error("Error al actualizar las fechas:", error);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Gestión de Reservas</h1>
      <FormularioReserva onSubmit={crearReserva} />
      <TablaReservas
        reservas={reservas}
        onDelete={eliminarReserva}
        onUpdate={actualizarFechas}
      />
    </div>
  );
};

export default App;
