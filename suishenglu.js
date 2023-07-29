/**************************************
脚本功能: 回声鹿解锁订阅
***************************************
[rewrite_local]

^https?:\/\/api\.suishenglu\.cn\/account\/(getaccount|GetFileList) url script-response-body https://raw.githubusercontent.com/jackzzs/qx-rewrites/main/suishenglu.js

[mitm]

hostname = api.suishenglu.cn

***************************************/

let obj = JSON.parse($response.body);
obj['Data']['VIP'] = 1;
obj['Data']['Days'] = 1825;
obj['Data']['NoAds'] = 1;
obj['Data']['CurrencyAmount'] = 9999;
$done({body: JSON.stringify(obj)});
