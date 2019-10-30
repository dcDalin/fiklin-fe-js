const checkRoles = (clientRoles, serverRoles) => {
  clientRoles.some(val => {
    return serverRoles.indexOf(val) !== -1;
  });
};

export default checkRoles;
