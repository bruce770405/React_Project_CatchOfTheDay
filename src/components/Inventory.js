import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            editFishToSample={this.props.editFishToSample}
            removeFishToSample={this.props.removeFishToSample}
          />
        ))}
        <AddFishForm addFishToSample={this.props.addFishToSample} />
        <button type="submit" onClick={this.props.loadSample}>
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
