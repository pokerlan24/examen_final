import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const TablaReservas = ({ reservas, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null);
  const [fechas, setFechas] = useState({ fechaInicio: null, fechaFin: null });
  const [error, setError] = useState("");

  const handleUpdateClick = (reserva) => {
    setEditId(reserva.id);
    setFechas({
      fechaInicio: new Date(reserva.fechaInicio),
      fechaFin: new Date(reserva.fechaFin),
    });
    setError("");
  };

  const handleSave = () => {
    if (!fechas.fechaInicio || !fechas.fechaFin) {
      setError("Debes seleccionar las fechas.");
      return;
    }

    if (fechas.fechaInicio >= fechas.fechaFin) {
      setError("La fecha de inicio no puede ser mayor o igual a la fecha fin.");
      return;
    }

    if (fechas.fechaInicio < new Date()) {
      setError("No puedes reservar en una fecha pasada.");
      return;
    }

    setError(""); // Limpiar errores si todo es válido
    onUpdate(editId, {
      fechaInicio: format(fechas.fechaInicio, "yyyy-MM-dd"),
      fechaFin: format(fechas.fechaFin, "yyyy-MM-dd"),
    });
    setEditId(null);
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre Cliente</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Tipo de Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.id}</td>
              <td>{reserva.nombreCliente}</td>
              <td>
                {editId === reserva.id ? (
                  <DatePicker
                    selected={fechas.fechaInicio}
                    onChange={(date) => setFechas((prev) => ({ ...prev, fechaInicio: date }))}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                    className="form-control"
                  />
                ) : (
                  reserva.fechaInicio
                )}
              </td>
              <td>
                {editId === reserva.id ? (
                  <DatePicker
                    selected={fechas.fechaFin}
                    onChange={(date) => setFechas((prev) => ({ ...prev, fechaFin: date }))}
                    dateFormat="yyyy-MM-dd"
                    minDate={fechas.fechaInicio || new Date()}
                    className="form-control"
                  />
                ) : (
                  reserva.fechaFin
                )}
              </td>
              <td>{reserva.tipoHabitacion}</td>
              <td>
                {editId === reserva.id ? (
                  <>
                    <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
                      Guardar
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditId(null)}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleUpdateClick(reserva)}
                    >
                      Actualizar
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(reserva.id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default TablaReservas;
