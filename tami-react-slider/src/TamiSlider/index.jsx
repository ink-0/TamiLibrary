import React, { useState, useEffect } from 'react';
import { Wrap, ViewArea, Controller, SlideBox, SlideList } from './index.style';

const TamiSlider = () => {
  const transitionDefault = 'all .5s';
  const panelWidth = 200;
  const panelCount = 3;

  const [x, setX] = useState(-panelWidth);
  const [moving, setMoving] = useState(false);
  const [trasitionValue, setTransitionValue] = useState(transitionDefault);

  const onMove = (direction) => {
    if (moving) return;
    setX((prevX) => prevX + direction * 200);
    setMoving(true);
    console.log('this', this);
  };

  const onTransitionEnd = () => {
    setMoving(false);
    if (x === -panelWidth * (panelCount + 1)) {
      console.log('💓panelCount는', panelCount);
      setTransitionValue('none');
      setX(-panelWidth);
    } else if (x === 0) {
      console.log('💙panelCount는', panelCount);

      setTransitionValue('none');
      setX(-panelWidth * panelCount);
    }
  };

  useEffect(() => {
    if (trasitionValue === 'none') setTransitionValue(transitionDefault);
  }, [x]);

  const ulStyles = {
    position: 'absolute',
    left: '200px',
    transform: `translate3d(${x}px, 0, 0)`,
    transition: trasitionValue,
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  };
  const liStyle = {
    width: '200px',
  };

  return (
    <>
      <Wrap className="App">
        <ViewArea>
          <ul style={ulStyles} onTransitionEnd={onTransitionEnd}>
            <li style={liStyle}>C</li>
            <li style={liStyle}>A</li>
            <li style={liStyle}>B</li>
            <li style={liStyle}>C</li>
            <li style={liStyle}>A</li>
          </ul>
          {/* <SlideBox class="slide_box">
            <SlideList style={ulStyles} class="slide_list">
              <div id="lastClone" class="slide_item">
                5
              </div>
              <div class="slide_item">1</div>
              <div class="slide_item">2</div>
              <div class="slide_item">3</div>
              <div class="slide_item">4</div>
              <div class="slide_item">5</div>
              <div id="firstClone" class="slide_item">
                1
              </div>
            </SlideList>
          </SlideBox> */}
        </ViewArea>
      </Wrap>
      <Controller>
        <button onClick={onMove.bind(undefined, +1)}>좌로</button>
        <button onClick={onMove.bind(undefined, -1)}>우로</button>
      </Controller>
    </>
  );
};

export default TamiSlider;

//https://kyounghwan01.github.io/blog/etc/make-npm/publish-npm-react-component/
