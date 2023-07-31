/**************************************
脚本功能: 回声鹿解锁订阅
***************************************
[rewrite_local]

^https?:\/\/api\.suishenglu\.cn\/account\/(getaccount|GetFileList|getUserBalance) url script-response-body https://raw.githubusercontent.com/jackzzs/rewrites/main/suishenglu.js

[mitm]

hostname = api.suishenglu.cn

***************************************/

let obj = JSON.parse($response.body);

if (obj['Data'].hasOwnProperty('accountModel')) {
  obj['Data']['accountModel']['VIP'] = 1;
  obj['Data']['accountModel']['Days'] = 1825;
  obj['Data']['accountModel']['NoAds'] = 1;
  obj['Data']['accountModel']['CurrencyAmount'] = 9999;
}

if (obj['Data'].hasOwnProperty('VIP')) {
  obj['Data']['VIP'] = 1;
  obj['Data']['Days'] = 1825;
  obj['Data']['NoAds'] = 1;
  obj['Data']['CurrencyAmount'] = 9999;
}

if (obj['Data'].hasOwnProperty('Balance')) {
  obj['Data']['Balance'] = 9999;
  obj['Data']['NlsPrice'] = 1;
  obj['Data']['FileToTextPrice'] = 1;
}

$done({body: JSON.stringify(obj)});
