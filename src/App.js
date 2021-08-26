import Header from "./Header";
import GeneralInfo from "./Generalnfo";
import Footer from "./Footer";
import EducationalExp from "./EducationalExp";
import JobExp from "./JobExp";

function App() {
  return (
    <div className="App">
      <Header />
      <GeneralInfo />
      <JobExp />
      <EducationalExp />
      <button>Save CV</button>
      <Footer />
    </div>
  );
}

export default App;
