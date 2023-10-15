import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/Cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  //The state of navigation can be in "idle", "loading" & "submitting";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
