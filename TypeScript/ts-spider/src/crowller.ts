// ts -> .d.ts 翻译文件 -> js
import superagent from 'superagent';

class Crowller {
  private secret = '';
  // private url = `www.baidu.com=${this.secret}`;
  private url = `https://www.baidu.com/`;
  private rawHtml = '';

  async getRawHtml() {
    const res = await superagent.get(this.url);
    console.log(res.text);
    this.rawHtml = res.text;
  }
  constructor() {
    // console.log('构造方法');
    this.getRawHtml();
  }
}

// console.log('hi, coming');

const crowller = new Crowller();
