# README

## Running

```
git clone git@github.com:beautiful-geo-diary/swagger-api.git
cd swagger-api
npm install
DEBUG=swagger* swagger project start
```

## Testing

```
$> curl -v http://WHATEVER_IP:PORT/picture/by-id/1
200

$> curl -v http://WHATEVER_IP:PORT/picture/by-id/123
404
```


## Extending

see:

* https://github.com/beautiful-geo-diary/swagger-api/blob/master/api/controllers/picture.js#L28
* https://github.com/beautiful-geo-diary/swagger-api/blob/master/api/controllers/picture.js#L38
