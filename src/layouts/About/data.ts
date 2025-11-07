const qrWechat = new URL('../../assets/images/qr-wechat.jpg', import.meta.url) + '';
const qrQq = new URL('../../assets/images/qr-qq.jpg', import.meta.url) + '';
const qrWeibo = new URL('../../assets/images/qr-weibo.png', import.meta.url) + '';
const qrGithub = new URL('../../assets/images/qr-github.png', import.meta.url) + '';

export default [
    { desc: '官方微信公众号', img: qrWechat, icon: 'icon-weixin' },
    { desc: '官方QQ群', img: qrQq, icon: 'icon-iconfonticon6' },
    { desc: '官方微博', img: qrWeibo, icon: 'icon-weibo' },
    { desc: '官方github', img: qrGithub, icon: 'icon-github' }
];
