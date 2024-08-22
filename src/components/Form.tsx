import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { categories } from "../data/category"
import { Activity } from "../types";
import { ActivityActions } from "../reducers/activity-reducer";

type FormProps = {
      dispatch: Dispatch<ActivityActions>
}
const Form = ({ dispatch }: FormProps) => {

      const [activity, setActivity] = useState<Activity>({
            category: 1,
            name: '',
            calories: 0
      });

      const handleChange = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

            const isNumberField = ['category', 'calories'].includes(event.target.id);

            //console.log(isNumberField);

            setActivity({
                  ...activity,
                  [event.target.id]: isNumberField ? +event.target.value : event.target.value
            });

      }

      const isValidActivity = () => {
            const { name, calories } = activity
            return name.trim() !== '' && calories > 0
      }

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log('submit...');
            dispatch({ type: 'save-activity', payload: { newActivity: activity } });
      }

      // console.log(activity);

      return (
            <form
                  className="space-y-5 bg-white shadow p-10 rounded-lg"
                  onSubmit={handleSubmit}
            >
                  <div className="grid grid-cold-1 gap-3">
                        <label htmlFor="category" className="font-bold">Categoria:</label>
                        <select
                              className="border border-slate-300  p-2 rounded-lg w-full bg-white"
                              id="category"
                              value={activity.category}
                              onChange={handleChange}
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
                              onChange={handleChange}
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
                              onChange={handleChange}
                        />
                  </div>

                  <input
                        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                        type="submit"
                        value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                        disabled={!isValidActivity()}
                  />

            </form>
      )
}

export default Form