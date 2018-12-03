import React from "react";

class EditFishForm extends React.Component {
  /**
   * 增加一個新sample
   */
  handleChange = event => {
    event.preventDefault();
    console.log(event.currentTarget.name);
    console.log(event.currentTarget);
    //改變值
    this.props.fish[event.currentTarget.name] = event.currentTarget.value;
    console.log("change this fish data", this.props.index);
    this.props.editFishToSample(this.props.index, this.props.fish);
  };

  /**
   * 刪除此筆資料
   */
  removeAction = () => {
    console.log("delete this fish data", this.props.index);
    this.props.removeFishToSample(this.props.index);
  };

  render() {
    return (
      <form className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="avaiable">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input name="image" type="text" placeholder="Image" />
        <button type="submit" onClick={this.removeAction}>Remove Fish</button>
      </form>
    );
  }
}

export default EditFishForm;
