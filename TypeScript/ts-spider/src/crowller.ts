// ts -> .d.ts 翻译文件 -> js
import superagent from 'superagent';
import cheerio from 'cheerio';

class Crowller {
  private secret = '';
  // private url = `www.baidu.com=${this.secret}`;
  private url = `https://www.imooc.com/course/list?c=photo`;

  getCourseInfo(html:string){
      const $ = cheerio.load(html);
      const courseList = $('.list max-1152 clearfix');
      const text = courseList.find('.item free');
      console.log(text);
      
      // console.log(courseList);
      
  }

  async getRawHtml() {
    const res = await superagent.get(this.url);
    // console.log(res.text);
    this.getCourseInfo(res.text);
  }
  constructor() {
    // console.log('构造方法');
    this.getRawHtml();
  }
}

// console.log('hi, coming');

const crowller = new Crowller();
