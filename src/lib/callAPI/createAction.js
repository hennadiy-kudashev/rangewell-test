import createTypes from './createTypes';

export default ({
  type,
  callAPI,
  shouldCallAPI = () => true,
  payload = {}
}) => {
  return {
    // Types of actions to emit before and after
    types: createTypes(type),
    // Check the cache (optional):
    shouldCallAPI,
    // Perform the fetching:
    callAPI,
    // Arguments to inject in begin/end actions
    payload
  };
};
