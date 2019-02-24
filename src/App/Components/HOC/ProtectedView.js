const ProtectedView = props => {
  const jsx = null;
  if (props.isAuthenticated) {
    jsx = <React.Fragment>{props.children}</React.Fragment>;
  }
  return jsx;
};

export default ProtectedView;
