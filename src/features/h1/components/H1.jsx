import React from "react";
import { connect } from "react-redux";
import { default as H1Results } from "./H1Results";
import { getIsFetchingH1, getH1Title, getH1Error } from "../h1Selectors";
import { doAsyncFetchH1 } from "../h1Actions";

const H1 = ({ isFetching, h1Title, error, doAsyncFetchH1 }) => {
  // useEffect(() => {
  //   doAsyncFetchH1("data");
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, []);
  return <H1Results isFetching={isFetching} h1Title={h1Title} error={error} />;
};

const mapStateToProps = (state, props) => {
  // console.log(`map state to props: ${JSON.stringify(state, null, 4)}`);
  const isFetching = getIsFetchingH1(state, props);
  const h1Title = getH1Title(state, props);
  const error = getH1Error(state, props);
  return {
    isFetching: isFetching,
    h1Title: h1Title,
    error: error,
  };
};

const mapDispatchToProps = {
  doAsyncFetchH1,
};

export default connect(mapStateToProps, mapDispatchToProps)(H1);
