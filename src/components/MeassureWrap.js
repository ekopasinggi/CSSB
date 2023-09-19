import React from "react";

class MeassureWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xOffset: -1e6,
      yOffset: -1e6,
      toolTipVisible: "hidden"
    };
  }

  handleMouseEnter = (event) => {
    this.setState({ toolTipVisible: "visible", cursor: "none" });
  };

  handleMouseLeave = (event) => {
    this.setState({
      toolTipVisible: "hidden",
      cursor: "default",
      xOffset: -1e6,
      yOffset: -1e6
    });
  };

  handleMouseMove = (event) => {
    var bounds = event.target.getBoundingClientRect();
    var x = Math.floor(event.clientX - bounds.left);
    var y = Math.floor(event.clientY - bounds.top);
    this.setState({ xOffset: x, yOffset: y });
  };

  handleMouseDown = (event) => {
    var bounds = event.target.getBoundingClientRect();
    var x = Math.floor(event.clientX - bounds.left);
    var y = Math.floor(event.clientY - bounds.top);
    if (this.props.onMouseDown)
      this.props.onMouseDown(x, y, event.ctrlKey || event.metaKey);
  };

  render() {
    const { xOffset, yOffset, toolTipVisible, cursor } = this.state;
    return (
      <div
        className="meassureRect disable-select"
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        onMouseDown={this.handleMouseDown}
        style={{ cursor: `${cursor}` }}
      >
        <div className="mrHorizontal" style={{ top: `${yOffset}px` }}></div>
        <div className="mrVertical" style={{ left: `${xOffset}px` }}></div>
        <div
          className="mrToolTip"
          style={{
            visibility: `${toolTipVisible}`,
            left: `${xOffset + 5}px`,
            top: `${yOffset - 28}px`
          }}
        >
          {xOffset} / {yOffset}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default MeassureWrap;
