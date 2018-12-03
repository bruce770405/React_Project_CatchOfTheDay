import React from "react";
import PropTypes from "prop-types";


const Header = props => (
  // return() {
  <header className="top">
    <h1>
      catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="The">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
  // }
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};


// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           catch
//           <span className="ofThe">
//             <span className="of">of</span>
//             <span className="The">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }

export default Header;
