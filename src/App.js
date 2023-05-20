import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {RouterProvider} from "react-router-dom";
import router from "./router";

const App = () => {
  return (
      <div>
          <Header />
            <RouterProvider router={router} />
          <Footer />
      </div>
  );
};

export default App;
