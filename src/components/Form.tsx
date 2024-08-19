import { useState } from "react"
import { categories } from "../data/category"

const Form = () => {

      const [activity, setActivity] = useState({
            category: '',
            name: '',
            calories: 0
      });

      return (
            <form className="space-y-5 bg-white shadow p-10 rounded-lg">
                  <div className="grid grid-cold-1 gap-3">
                        <label htmlFor="category" className="font-bold">Categoria:</label>
                        <select
                              className="border border-slate-300  p-2 rounded-lg w-full bg-white"
                              id="category"
                              value={activity.category}
                        >
                              {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                              ))}
                        </select>
                  </div>

                  <div className="grid grid-cold-1 gap-3">
                        <label htmlFor="name" className="font-bold">Actividad:</label>
                        <input
                              className="border border-slate-300 p-2 rounded-lg"
                              type="text"
                              id="name"
                              placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Presas, Bicicleta"
                              value={activity.name}
                        />
                  </div>

                  <div className="grid grid-cold-1 gap-3">
                        <label htmlFor="calories" className="font-bold">Calorias:</label>
                        <input
                              className="border border-slate-300 p-2 rounded-lg"
                              type="number"
                              id="calories"
                              placeholder="Calorias Ej. 300 o 500"
                              value={activity.calories}
                        />
                  </div>

                  <input
                        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                        type="submit"
                        value="Guardar Comida o Guardar Ejercicio"
                  />

            </form>
      )
}

export default Form