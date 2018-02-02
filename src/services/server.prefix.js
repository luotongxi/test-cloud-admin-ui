export const SERVICE_USER_PREFIX = "user-api"

export default {

  resolveUserSrvUrl: (suffix) => {
    return `${SERVICE_USER_PREFIX}/${suffix}`;
  }

}

