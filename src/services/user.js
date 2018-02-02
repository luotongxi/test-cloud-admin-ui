import ajaxUtil from '@/framework/utils/ajaxUtil'
import resolveUtil from './server.prefix'

export default {
  listAll (cfg) {
    cfg.url = resolveUtil.resolveUserSrvUrl("user");
    return ajaxUtil.doGet(cfg);
  },
  getById (cfg) {
    cfg.url = resolveUtil.resolveUserSrvUrl(`user/${cfg.id}`);
    return ajaxUtil.doGet(cfg);
  },
  editName(cfg){
    cfg.url = resolveUtil.resolveUserSrvUrl(`user/${cfg.id}`);
    return ajaxUtil.doPut(cfg);
  },
  deleteById(cfg){
    cfg.url = resolveUtil.resolveUserSrvUrl(`user/${cfg.id}`);
    return ajaxUtil.doDelete(cfg);
  }
}
