import React from 'react';
import { connect } from 'react-redux';

interface Props {
  error: string;
}
const ErrorViewController: React.FC<Props> = (props) => {
  const { error } = props;
  return (
    <div>
      <h1>{error}</h1>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    error: state.auth.error
  };
}
export default connect(mapStateToProps)(ErrorViewController);
