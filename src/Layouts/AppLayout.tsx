import NavComponent from "@/components/ui/NavBar/Nav.component";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <NavComponent />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
