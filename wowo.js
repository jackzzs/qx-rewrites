/**************************************
脚本功能: 窝窝解锁订阅
***************************************
[rewrite_local]

^https?:\/\/circlef\.wewave\.com\.cn\/circlef\/api\/feed\/getUserActivityProfile url script-response-body https://raw.githubusercontent.com/jackzzs/rewrites/main/wowo.js

[mitm]
hostname = circlef.wewave.com.cn

***************************************/

let obj = JSON.parse($response.body);

if (obj['data'].hasOwnProperty('userInfo')) {
  obj['data']['userInfo']['vipStatus'] = 2;
}

if (obj['data'].hasOwnProperty('wealthIcon')) {
  obj['data']['wealthIcon'] = "https://sh-cdn.wewave.com.cn/circlef/wealthcharmicon/wealth_40.png";
}

if (obj['data'].hasOwnProperty('charmIcon')) {
  obj['data']['charmIcon'] = "https://sh-cdn.wewave.com.cn/circlef/wealthcharmicon/charm_40.png";
}

if (obj['data'].hasOwnProperty('vipInfo')) {
  obj['data']['vipInfo']['vipStatus'] = 2;
  obj['data']['vipInfo']['vipName'] = "已破解";
}

if (obj['data'].hasOwnProperty('wallet')) {
  obj['data']['wallet']['assets'] = [{"assetID":1, "amount":99999}, {"assetID":2, "amount":99999}];
}

$done({body: JSON.stringify(obj)});
