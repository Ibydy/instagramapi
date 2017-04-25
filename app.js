const JSONP = require('./JSONP').JSONP;
const JSONPOptions = require('./JSONPOptions').JSONPOptions;
const PostCreator = require('./PostCreator').PostCreator;
const URL = 'https://api.instagram.com/v1/users/691623/media/recent?callback=handleStuff&access_token=691623.1419b97.479e4603aff24de596b1bf18891729f3&count=20&_=1493110540271';

const onSuccess = (response) => {
   response.data.forEach(post => new PostCreator(post));

};


JSONP.send(URL, new JSONPOptions(onSuccess));
