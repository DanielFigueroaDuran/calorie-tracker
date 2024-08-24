import { useMemo } from "react"
import { Activity } from "../types"


type CalorieTrakerProps = {
      activities: Activity[]
}

const CalorieTraker = ({ activities }: CalorieTrakerProps) => {

      const caloriesConsumed = useMemo(() => activities.reduce((total, activity) =>
            activity.category === 1 ? total + +activity.calories : total, 0)
            , [activities])

      return (
            <>
                  <h1 className="text-4xl font-bold text-white text-center">Resumen de Calorias</h1>

                  <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-18">
                        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                              <span className="font-black text-5xl text-orange">{caloriesConsumed}</span>
                              Consumidas
                        </p>
                  </div>

            </>
      )
}

export default CalorieTraker