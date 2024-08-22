import { Activity } from "../types"


type ActivityProps = {
      activities: Activity[]
}

const ActivityList = ({ activities }: ActivityProps) => {

      //console.log(activities);
      return (
            <>
                  <h2 className="text-4xl font-bold text-slate-600 text-center">
                        Comida y Actividades
                  </h2>

                  {activities.map(activitie => (
                        <div key={activitie.id} className="px-5 py-10 bg-slate-100 mt-5 flex justify-between">
                              <div className="space-y-2 relative">
                                    <p>{activitie.category}</p>
                                    <p className="text-2xl font-bold">{activitie.name}</p>
                                    <p className="font-black text-4xl text-lime-500">
                                          {activitie.calories} {''}
                                          <span>Calories</span>
                                    </p>
                              </div>

                              <div>

                              </div>
                        </div>
                  ))}
            </>
      )
}

export default ActivityList