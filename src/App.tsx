import "./App.css"; // Import your CSS file
import FlipperCard from './components/flipper-card/flipper-card';
import Card from "./components/card/card";


const FrontComponent = () => <div>In porgress</div>;
const BackComponent = () => <div>Also in progress</div>;

const App = () => (
  <div className="page-wrapper homepage" >
    <div className="container is-max-widescreen">
    <div className="hp-cards columns is-mobile is-multiline">
      <div className="column is-12-mobile is-12-tablet is-8-widescreen">
        <Card contentComponent={<FrontComponent />} />
      </div>  
      <div className="column is-12-mobile is-6-tablet is-4-widescreen">
        <FlipperCard frontComponent={<FrontComponent />} backComponent={<BackComponent />} />
      </div>
      <div className="column is-12-mobile is-6-tablet is-4-widescreen">
        <FlipperCard frontComponent={<FrontComponent />} backComponent={<BackComponent />} />
      </div>
      <div className="column is-12-mobile is-12-tablet is-8-widescreen">
        <FlipperCard frontComponent={<FrontComponent />} backComponent={<BackComponent />} />
      </div>
      <div className="column is-12-mobile is-6-tablet is-4-widescreen">
        <FlipperCard frontComponent={<FrontComponent />} backComponent={<BackComponent />} />
      </div>
      <div className="column is-12-mobile is-6-tablet is-4-widescreen">
        <FlipperCard frontComponent={<FrontComponent />} backComponent={<BackComponent />} />
      </div>
      <div className="column is-12-mobile is-6-tablet is-4-widescreen">
        <FlipperCard frontComponent={<FrontComponent />} backComponent={<BackComponent />} />
      </div>
      <div className="column is-12-mobile is-6-tablet is-4-widescreen">
        <FlipperCard frontComponent={<FrontComponent />} backComponent={<BackComponent />} />
      </div>
    </div>
    </div>
  </div>
);

export default App;