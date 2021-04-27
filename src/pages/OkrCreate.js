import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/planification/Planification.scss'

const OkrCreate = () => {
	return (
		<section className="containerOkrCreate">
			<div className="title">
				<h3>Crear Objetivo</h3>
			</div>

			<div className="fieldOkrCreate">
				<form className="row">
					<div className="col">
						<div className="fieldCol">
							<label htmlFor="titleOKR">Titulo</label>
							<input type="text" name="titleOKR" id="titleOKR" required />
						</div>

						<div className="fieldCol">
							<label htmlFor="objectiveOKR">Objetivo</label>
							<input type="text" name="objectiveOKR" id="objectiveOKR" required />
						</div>

						<div className="fieldColRespomsable">
							<div>
								<p>Responsable</p>
							</div>

							<div className="fieldColRes">
								<label htmlFor="nameOKR">Nombre</label>
								<input type="text" name="nameOKR" id="nameOKR" required />
							</div>

							<div className="fieldColRes">
								<label htmlFor="emailOKR">Correo</label>
								<input type="text" name="emailOKR" id="emailOKR" required />
							</div>
						</div>
					</div>

					<div className="col">
						<div className="fieldCol">
							<label htmlFor="vertical">Verticales</label>
							<select name="vertical" id="vertical" required>
								<option value="1">Option 1</option>
								<option value="2">Option 2</option>
								<option value="3">Option 3</option>
							</select>
						</div>

						<div className="fieldCol">
							<label htmlFor="description">Descripción</label>
							<textarea
								name="description"
								required
								id="description"
								cols="30"
								rows="10"
							></textarea>
						</div>
					</div>
				</form>
			</div>

			<div className="containerButtons">
				<Link to="/okrs">
					<button>Cancelar</button>
				</Link>
				<Link to="/krCreate">
					<button>Siguiente</button>
				</Link>
			</div>
		</section>
	)
}

export default OkrCreate
