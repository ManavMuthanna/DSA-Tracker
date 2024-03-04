import "../sidebar/sidebar.css";
function Sidebar() {
  return (
    <>
    <div>
      <div className="heading">
        <p>Choose your preferences</p>
      </div>
      <div className="sidebar">
        <div className="difficulty">
        <h4>DIFFICULTY</h4>
        <br></br>
        <div className="checkboxes">
          <input type="checkbox" id="easy" value="Easy"></input>
          <label for="easy">Easy</label>
          <br></br>
          <input type="checkbox" id="medium" value="Medium"></input>
          <label for="medium">Medium</label>
          <br></br>
          <input type="checkbox" id="hard" value="Hard"></input>
          <label for="hard">Hard</label>
          <br></br>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Sidebar;
