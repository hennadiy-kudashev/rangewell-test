export const requestType = type => `${type}_REQUEST`;
export const successType = type => `${type}_SUCCESS`;
export const failureType = type => `${type}_FAILURE`;

export default type => {
  return [requestType(type), successType(type), failureType(type)];
};
