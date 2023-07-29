/**************************************
脚本功能: 回声鹿解锁订阅
***************************************
[rewrite_local]

^https?:\/\/api\.suishenglu\.cn\/account\/(getaccount|GetFileList) url script-response-body https://raw.githubusercontent.com/jackzzs/qx-rewrites/main/suishenglu.js

[mitm]

hostname = api.suishenglu.cn

***************************************/

var body = $response.body;
var obj = JSON.parse(body);
obj['VIP'] = 1;
obj['Days'] = 365;
obj['CurrencyAmount'] = 5000;
obj['NoAds'] = 1;
body = JSON.stringify(obj);
$done(body);
