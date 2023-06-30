import "./App.css";

const suspects = ["Rev. Green", "Col. Mustard", "Prof. Plum", "Mrs. Peacock", "Miss Scarlet", "Mrs. White"];
const weapons = ["Rope", "Dagger", "Lead Pipe", "Candlestick", "Spanner", "Revolver]"];
const rooms = [
  "Kitchen",
  "Ballroom",
  "Conservatory",
  "Dining Room",
  "Billiard Room",
  "Library",
  "Lounge",
  "Hall",
  "Study",
];
function App() {
  return (
    <div className="container mx-auto">
      <div>Suspects</div>
      <div>Weapons</div>
      <div>Rooms</div>
    </div>
  );
}

export default App;
