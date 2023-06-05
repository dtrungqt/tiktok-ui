import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout(props) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
