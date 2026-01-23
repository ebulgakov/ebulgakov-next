"use client";

import { useState, useEffect } from "react";

type FrameContainerProps = {
  link: string;
};

function FrameContainer({ link }: FrameContainerProps) {
  const [frameHeight, setFrameHeight] = useState("");

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data[0] === "setHeight") setFrameHeight(e.data[1]);
    }
    window.addEventListener("message", handleMessage, false);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      height={frameHeight}
      className="block min-h-screen w-full overflow-hidden border-none"
      title="Page"
      src={link}
    />
  );
}

export { FrameContainer };

/*import React, { Component } from 'react';
import { string } from 'prop-types';

const FrameContainer = class extends Component {
  static propTypes = {
    link: string.isRequired,
  };
  state = {
    frameHeight: '',
  };
  componentDidMount() {
    window.addEventListener('message', this.setFrameHeight, false);
  }
  componentWillUnmount() {
    window.removeEventListener('message', this.setFrameHeight);
  }
  setFrameHeight = e => {
    if (e.data[0] === 'setHeight') {
      this.setState({
        frameHeight: e.data[1],
      });
    }
  };
  render() {
    const { link } = this.props;
    return (
      <iframe
        height={this.state.frameHeight}
        className="work_frame-container"
        title="Page"
        src={link}
      />
    );
  }
};

export default FrameContainer;
*/
