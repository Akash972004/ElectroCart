import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/signup"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground transition-colors duration-300 flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">{children}</main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default Layout;
