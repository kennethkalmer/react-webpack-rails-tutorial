// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import commentsStoreSelector from '../../../selectors/commentsStoreSelector';
import { actions } from '../sagas';

const mapStateToProps = createSelector(
  commentsStoreSelector,
  (commentsStore: any) => ({
    comments: commentsStore.delete('meta').toJS(),
    meta: commentsStore.get('meta').toJS(),
  })
);

const mapDispatchToProps = (dispatch: Function) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default (Component: ReactClass<any>): ReactClass<{}> =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
