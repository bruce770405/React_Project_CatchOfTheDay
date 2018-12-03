import React from "react";
import Login from "./Login";
import firebase from "firebase";
import base, { firebaseApp } from "../common.db/firebase.component";

class StorePicker extends React.Component {
  inputRef = React.createRef();

  constructor(props) {
    super(props);
    console.log("StorePicker initial...");
    //bind this to function
    this.submitAction = this.submitAction.bind(this);
    // this.state = { a: new Date() };
  }

  submitAction = event => {
    console.log("StorePicker submitAction...", this.inputRef.value.value);
    //stop the form from submit
    event.preventDefault();
    let ixd = this.inputRef.value.value;
    this.props.history.push(`/store/${ixd}`);
  };

  /**
   * 執行帳號認證
   */
  authAction = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authAfterHandler);
  };

  /**
   * 回傳認證使用者資料.
   */
  authAfterHandler = async authData => {
    // console.log("fetch 開始處理回傳資料..", authData);
    let name = authData.user.displayName;
    console.log("fetch 開始處理回傳資料..", name);
    if (!name) {
      const store = await base.fetch(name, { context: this });
      if (!store || !store.owner) {
        //沒有資料，創建
        await base.post(`${name}/owner`, { data: authData.user.uid });
      }
    }
    // if (!store.owner) {
    //   console.log("開始處理回傳資料..", authData);
    //   //save the owner data
    //   await base.post(`${this.props.storeId}/owner`, {});
    // }
  };

  render() {
    return <Login authAction={this.authAction} />;
    return (
      <form className="store-selector" onSubmit={this.submitAction}>
        <h2> Please Enter Store Name </h2>
        <input
          type="text"
          ref={this.inputRef}
          required
          placeholder="Store Name"
          defaultValue="hello"
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
