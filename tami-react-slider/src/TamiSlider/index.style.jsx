import styled from "styled-components";

const Wrap = styled.div`
  display: inline-block;
`;
const ViewArea = styled.div`
  display: flex;
  width: 600px;
  overflow: hidden;

  /* float: left; */
`;
const Controller = styled.div`
  display: flex;
`;
const SlideBox = styled.div`
  width: 200px;

  border: rgb(255, 14, 135) 3px dotted;
`;

const SlideList = styled.div`
  width: 1000px;

  display: flex;
`;

export { Wrap, ViewArea, Controller, SlideList, SlideBox };
