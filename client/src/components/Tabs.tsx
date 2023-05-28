import NavLink from './NavLink'

const Tabs = () => {

  return (
    <div className="my-5 text-md font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap justify-center -mb-px">
          <NavLink />
          <NavLink category={'service'} />
          <NavLink category={'sales'} />
          <NavLink category={'marketing'} />
          <NavLink category={'web'} />
      </ul>
</div>
  )
}

export default Tabs