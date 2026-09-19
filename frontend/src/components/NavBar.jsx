function NavBar() {
  return (
    <nav className="flex gap-5 p-3 max-xl:justify-between">
      <h2 className="shrink p-1.5">Budget Planner</h2>

      <div className="max-xl:hidden flex justify-around grow md:gap-1">
        <a
          className="hover:bg-black hover:text-white hover:rounded-sm p-1.5"
          href=""
        >
          Overview
        </a>
        <a
          className="hover:bg-black hover:text-white hover:rounded-sm p-1.5 "
          href=""
        >
          Transactions
        </a>
        <a
          className="hover:bg-black  hover:text-white hover:rounded-sm p-1.5"
          href=""
        >
          All Expenses
        </a>
        <a
          className="hover:bg-black  hover:text-white hover:rounded-sm p-1.5"
          href=""
        >
          Upcoming Payments
        </a>
        <a
          className="hover:bg-black  hover:text-white hover:rounded-sm p-1.5"
          href=""
        >
          Saving goals
        </a>
      </div>
      <div className="max-md:hidden flex gap-1.5 p-1.5">
        <a href="">Search</a>
        <a href="">Notifications</a>
        <a href="">PP</a>
      </div>
    </nav>
  );
}

export default NavBar;
