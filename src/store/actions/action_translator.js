import $ from "jquery";
import { TRANSLATE, TRANSLATE_REQUEST } from '../constants';


export const translate = (text, from, to, dispatch)=> {
    const apiKey = 'trnsl.1.1.20170711T205824Z.6868284c9ba3b6a1.9ffe2209f7b82636f2dd02661d9010984d0f335e';
    const langDirection = from +'-' + to
    const url = 'https://translate.yandex.net/api/v1.5/tr/translate?key='+ apiKey +'&text='+ text +'&lang='+ langDirection +'&format=plain';

    console.log(url);

    $.ajax({
      url: url,
      dataType: 'xml',
      cache: false,
      success: function (data) {
        dispatch({
          type:TRANSLATE,
          translated:data.childNodes[0].childNodes[0].innerHTML
        })
      }
    })

    return {
      type:TRANSLATE_REQUEST,
      translated:'',
    };
};
