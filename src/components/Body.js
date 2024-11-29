import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";



const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // this is for sign in and sign out so we can know who is joined and leave
  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
