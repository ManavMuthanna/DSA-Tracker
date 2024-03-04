import "../questions/questions.css";
function Questions() {
  return (
    <div className="table-div">
      <table>
        <tr>
          <th>Week 1</th>
        </tr>
        <tr>
          <div className="row-content">
            <th>1</th>
            <td>Two sum</td>
            <td>
              <input type="checkbox"></input>
            </td>
          </div>
        </tr>
      </table>
    </div>
  );
}

export default Questions;
