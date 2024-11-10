import { useSideBarStore } from "@/stores/sideBarStore";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {
    const isSideBarOpen = useSideBarStore((state) => state.isOpen);
    const toggleSideBar = useSideBarStore((state) => state.toggle);

    return (
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        {isSideBarOpen && <div>teste</div>}
        <button onClick={toggleSideBar}>one up</button>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});
