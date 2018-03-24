import { connect } from 'react-redux';
import App from '../components/App';
import * as actions from '../actions/comments';

const mapStateToProps = state => ({
  user: state.ui.activeUser,
  loading: state.ui.loading,
  activeUser: state.ui.activeUser,
});

const mapDispatchToProps = dispatch => ({
  getComments: index => dispatch(actions.getComments(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);