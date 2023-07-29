/**************************************
脚本功能: 回声鹿解锁订阅
***************************************
[rewrite_local]

^https?:\/\/api\.suishenglu\.cn\/account\/(getaccount|GetFileList) url script-response-body https://raw.githubusercontent.com/jackzzs/qx-rewrites/main/suishenglu.js

[mitm]

hostname = api.suishenglu.cn

***************************************/

let obj = JSON.parse($response.body);
obj['VIP'] = 1;
obj['Days'] = 1;
obj['NoAds'] = 1;
$done({body: JSON.stringify(obj)});
