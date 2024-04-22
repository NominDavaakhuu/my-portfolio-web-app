export const Button = ({onClick,children}) => {
    return (
      <button onClick={onClick} className="text-sky-500 hover:text-white border border-sky-500 border-double hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-sky-500 dark:sky-blue-500 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-800">{children}</button>
    )
  }