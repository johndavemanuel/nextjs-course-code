const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "dave",
        mongodb_password: "xnKgJLRtv7YKOO66",
        mongodb_clustername: "cluster0",
        mongodb_database: "udemy-next-js-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "dave",
      mongodb_password: "xnKgJLRtv7YKOO66",
      mongodb_clustername: "cluster0",
      mongodb_database: "udemy-next-js",
    },
  };
};
