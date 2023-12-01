import "./App.css"; // Import your CSS file
import React, { useEffect, useState } from "react";
import anime from "animejs";
import randomColor from "randomcolor";

const App = () => {
  const [gridSize, setGridSize] = useState({ columns: 0, rows: 0, total: 1 });

  const handleStagger = (i: React.MouseEvent<HTMLDivElement>) => {
    const el = (i.target as HTMLDivElement).id;
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(),
      delay: anime.stagger(50, { grid: [gridSize.columns, gridSize.rows], from: parseInt(el) }),
    });
  };

const getGridSize = () => {
  const columns = Math.floor(document.body.clientWidth / 50);
  const rows = Math.floor(document.body.clientHeight / 50);

  setGridSize({ columns, rows, total: rows * columns });
};

  useEffect(() => {
    getGridSize();
    window.addEventListener("resize", getGridSize);

    return () => {
      window.removeEventListener("resize", getGridSize);
    };
  }, []);

  //console.log([gridSize.columns, gridSize.rows], gridSize.total);
  return (
    <div id="grid">
      {[...Array(gridSize.total)].map((_x, i) => (
        <div
          className="grid-item"
            id={i.toString()}
          onClick={handleStagger}
        />
      ))}
      <div className="coming-soon">Coming Soon</div>
    </div>
  );
};

export default App;
