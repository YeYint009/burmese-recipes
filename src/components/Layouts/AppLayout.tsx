import Nav from "@/components/NavBar/Nav";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
