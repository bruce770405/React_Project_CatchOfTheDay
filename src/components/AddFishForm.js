import React from "react";

class AddFishForm extends React.Component {
  /** name input */
  nameInput = React.createRef();
  /** price input */
  priceInput = React.createRef();
  /** desc text */
  descText = React.createRef();
  /** state select */
  stateSelect = React.createRef();
  /** image input */
  imgInput = React.createRef();

  /** constructor.*/
  constructor(props) {
    super(props);
    console.log("AddFishForm is init...");
    this.createFish = this.createFish.bind(this);
  }

  /**
   * 增加一個新sample
   */
  createFish = event => {
    event.preventDefault()
    const fish = {
     name : this.nameInput.value.value,
     price : this.priceInput.value.value,
     state : this.stateSelect.value.value,
     desc : this.descText.value.value,
     image : this.imgInput.value.value
    }
    // console.log('fish add',fish)
    this.props.addFishToSample(fish)
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameInput} type="text" placeholder="Name" />
        <input name="price" ref={this.priceInput} type="text" placeholder="Price" />
        <select name="status" ref={this.stateSelect} type="text" placeholder="State">
          <option value="avaiable">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descText} placeholder="Desc" />
        <input name="image" ref={this.imgInput} type="text" placeholder="Image" />
        <button type="submit" onClick={this.createFish}> + Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
