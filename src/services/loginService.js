import ajaxUtil from '@/framework/utils/ajaxUtil'
import resolveUtil from './server.prefix'

export default {

  login(cfg){
    cfg.url = resolveUtil.resolveUserSrvUrl("login");
    return ajaxUtil.doPost(cfg);
  },
  register(cfg){
    cfg.url = resolveUtil.resolveUserSrvUrl("user");
    return ajaxUtil.doPost(cfg);
  }

}
