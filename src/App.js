import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todo from "./Components/Todo";


class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      {/* <h1 >Hello Dorrah</h1> */}
      <Header />
      <Todo/>
      <Footer />
    
      </>
    ) 
  }
}

export default App;

