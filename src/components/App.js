import Fish from "./Fish";
import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

import sampleFishes from "../sample-fishes";
import base from "../common.db/firebase.component";

// import
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  /** constructor. */
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log("life cycle", "componentDidMount...");
    let { params } = this.props.match;
    //復原loaclestorage內暫存內容
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentWillUnmount() {
    console.log("life cycle", "componentWillUnmount...");
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    console.log("life cycle", "componentWillUpdate...");
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  /**
   * 新增sample.
   */
  addFishToSample = fish => {
    console.log("fish Order ", fish);
  };

  /**
   * 新增order.
   */
  addFishToOrder = key => {
    console.log("fish Order ", key);
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order
    });
  };

  /**
   * 刪除order資料.
   */
  removeFishFromOrder = key => {
    console.log("remove Fish From Order ", key);
    const order = { ...this.state.order };
    delete order[key];
    this.setState({
      order
    });
  };

  /**
   * 編輯 fish data
   */
  editFishData = (key, fish) => {
    console.log("flashFish data", key);
    const fishes = { ...this.state.fishes };
    fishes[key] = fish;
    this.setState({
      fishes
    });
  };

  /**
   * 刪除sample資料
   */
  removeFishData = key => {
    console.log("delete fish data", key);
    //解構
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({
      fishes
    });
  };

  /**
   * 讀取order sample.
   */
  loadSample = () => {
    console.log("loadSample");
    this.setState({
      fishes: sampleFishes
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="Meum">
          <Header tagline="Fresh Daily" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                detail={this.state.fishes[key]}
                addFishToOrder={this.addFishToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFishFromOrder={this.removeFishFromOrder}
        />
        <Inventory
          fishes={this.state.fishes}
          addFishToSample={this.addFishToSample}
          editFishToSample={this.editFishData}
          removeFishToSample={this.removeFishData}
          loadSample={this.loadSample}
        />
      </div>
    );
  }
}

export default App;
