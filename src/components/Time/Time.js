import React    from "react";
import template from "./Time.jsx";
import moment   from "moment"

class Time extends React.Component {
  DATE_FORMAT = "MMMM Do YYYY, h:mm:ss a";

  getDate() {
    return moment(this.props.date).format(this.DATE_FORMAT);
  }

  render() {
    return template.call(this);
  }
}

export default Time;
