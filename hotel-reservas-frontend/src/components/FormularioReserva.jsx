import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const FormularioReserva = ({ onSubmit }) => {
  const [form, setForm] = useState({
    nombreCliente: "",
    fechaInicio: null,
    fechaFin: null,
    tipoHabitacion: "Sencilla",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fechaInicio || !form.fechaFin) {
      setError("Debes seleccionar las fechas.");
      return;
    }

    if (form.fechaInicio >= form.fechaFin) {
      setError("La fecha de inicio no puede ser mayor o igual a la fecha fin.");
      return;
    }

    if (form.fechaInicio < new Date()) {
      setError("No puedes reservar en una fecha pasada.");
      return;
    }

    setError(""); // Limpiar errores si todo es válido
    onSubmit({
      ...form,
      fechaInicio: format(form.fechaInicio, "yyyy-MM-dd"),
      fechaFin: format(form.fechaFin, "yyyy-MM-dd"),
    });
    setForm({ nombreCliente: "", fechaInicio: null, fechaFin: null, tipoHabitacion: "Sencilla" });
  };

  return (
    <div className="card p-4 my-3">
      <h4 className="text-center">Nueva Reserva</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del Cliente</label>
          <input
            type="text"
            name="nombreCliente"
            className="form-control"
            placeholder="Nombre del Cliente"
            value={form.nombreCliente}
            onChange={(e) => setForm((prev) => ({ ...prev, nombreCliente: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Inicio</label>
          <DatePicker
            selected={form.fechaInicio}
            onChange={(date) => setForm((prev) => ({ ...prev, fechaInicio: date }))}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()} // No permitir fechas pasadas
            className="form-control"
            placeholderText="Selecciona la fecha de inicio"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Fin</label>
          <DatePicker
            selected={form.fechaFin}
            onChange={(date) => setForm((prev) => ({ ...prev, fechaFin: date }))}
            dateFormat="yyyy-MM-dd"
            minDate={form.fechaInicio || new Date()} // No permitir fechas menores a la fecha de inicio
            className="form-control"
            placeholderText="Selecciona la fecha de fin"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de Habitación</label>
          <select
            name="tipoHabitacion"
            className="form-select"
            value={form.tipoHabitacion}
            onChange={(e) => setForm((prev) => ({ ...prev, tipoHabitacion: e.target.value }))}
          >
            <option value="Sencilla">Sencilla</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default FormularioReserva;
