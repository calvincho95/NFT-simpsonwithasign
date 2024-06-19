import Banner from "./components/Banner";
import Picture from "./components/Picture";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="font-aprilPromise bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... min-h-screen">
      <TopBanner />
      <Banner />
      <Picture />
    </div>
  );
};

export default App;
