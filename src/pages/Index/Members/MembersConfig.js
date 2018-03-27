import ccbImg from '../../../assets/avatars/ccb-min.jpg';
import akImg from '../../../assets/avatars/Ak-min.jpg';
import glowd from '../../../assets/avatars/glowd-min.jpg';
import Dean from '../../../assets/avatars/Dean-min.jpg';
import CaiTing from '../../../assets/avatars/caiting-min.jpeg';
import Helen from '../../../assets/avatars/Helen-min.jpg';
import janeZhen from '../../../assets/avatars/janeZhen-min.jpg';
import lanhao from '../../../assets/avatars/lanhao-min.jpg';
import liunanbing from '../../../assets/avatars/liunanbing-min.jpg';
import qianyu from '../../../assets/avatars/qianyu-min.jpg';
import qingsong from '../../../assets/avatars/qingsong-min.jpg';
import shiyao from '../../../assets/avatars/shiyao-min.jpg';
import Too from '../../../assets/avatars/Too-min.jpg';
import wangbo from '../../../assets/avatars/wangbo-min.jpg';
import wangjie from '../../../assets/avatars/wangjie-min.jpg';
import xiaoshan from '../../../assets/avatars/xiaoshan-min.jpg';
import yuqi from '../../../assets/avatars/yuqi-min.jpg';

//用户链接类型
const URL_TYPE_CLASS = {
  github:'icon-github',
  lofter:'icon-LOFTER',
};
const MEMBERS = [{
  name : '姜姜姜',
  img : janeZhen,
  responsibility:'社区负责人',
  url: 'https://github.com/jiangyuzhen',
  urlType:URL_TYPE_CLASS.github
},{
  name : 'AK',
  img : akImg,
  responsibility:'活动部',
  url: '',
  urlType:'none'
},{
  name : '袁民成',
  img : Dean,
  responsibility:'文案与周边',
  url: 'https://github.com/jiangyuzhen',
  urlType:URL_TYPE_CLASS.github
},{
  name : 'Nanbing',
  img : liunanbing,
  responsibility:'协助运营',
  url: 'http://nanbing.me/',
  urlType:'user'
},{
  name : 'Helen',
  img : Helen,
  responsibility:'活动部',
  url: 'https://github.com/TingYinHelen',
  urlType:URL_TYPE_CLASS.github
},{
  name : '初一',
  img : wangbo,
  responsibility:'设计',
  url: 'http://918930.lofter.com',
  urlType:URL_TYPE_CLASS.lofter
},{
  name : '蓝浩',
  img : lanhao,
  responsibility:'后备开发人员',
  url: 'http://www.lanhao.name',
  urlType:'user'
},{
  name : 'glowd',
  img : glowd,
  responsibility:'后备开发人员',
  url: 'https://github.com/Glowdable',
  urlType:URL_TYPE_CLASS.github
},{
  name : '书香墨剑',
  img : yuqi,
  responsibility:'后备开发人员',
  url: 'https://github.com/demongodYY',
  urlType:URL_TYPE_CLASS.github
},{
  name : '蔡婷',
  img : CaiTing,
  responsibility:'活动策划',
  url: '',
  urlType:'none'
},{
  name : '水歌',
  img : shiyao,
  responsibility:'JavaScript 全栈开发讲师',
  url: 'https://tech-query.me/',
  urlType:'user'
},{
  name : '何青松',
  img : qingsong,
  responsibility:'FCC成都社区商务合作',
  url: 'https://github.com/Heqingsong',
  urlType:URL_TYPE_CLASS.github
},{
  name : '陈小山',
  img : xiaoshan,
  responsibility:'活动策划执行',
  url: 'https://github.com/HillChen3',
  urlType:URL_TYPE_CLASS.github
},{
  name : 'TOO',
  img : Too,
  responsibility:'技术支持',
  url: 'http://fctoo.com',
  urlType:'user'
},{
  name : '陈灿冰',
  img : ccbImg,
  responsibility:'技术支持',
  url: 'https://github.com/CanbingChen',
  urlType:URL_TYPE_CLASS.github
},{
  name : '倩玉',
  img : qianyu,
  responsibility:'文案',
  url: 'https://github.com/Lmagic16',
  urlType:URL_TYPE_CLASS.github
},{
  name : '王杰',
  img : wangjie,
  responsibility:'技术支持',
  url: 'https://github.com/acherie',
  urlType:URL_TYPE_CLASS.github
}];
export default MEMBERS;
