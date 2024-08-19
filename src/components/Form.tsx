
type Props = {}

const Form = (props: Props) => {
      return (
            <form className="space-y-5 bg-white shadow p-10 rounded-lg">
                  <div className="grid grid-cold-1 gap-3">
                        <label htmlFor="category">Categoria:</label>
                        <select
                              className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                              name=""
                              id="category"
                        ></select>
                  </div>

            </form>
      )
}

export default Form