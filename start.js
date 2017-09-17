const translate = require('google-trans-api-cn');
const fs =require("fs");
const path=require("path");
var rd = require('rd');
var request = require('request');
var num=0
var num1=0
let data="I read this awesome book on functional programming instead of going to bed last night\nYou'll have to ask around if you can't find i"
var youdao = require('youdao-fanyi')({
    key		: '2001075261',
    keyfrom	: 'LSONGORG'
});
var tjs = require('translation.js')
tjs.add(new tjs.GoogleCN())

// youdao.fanyi(data, function(err, results, body){
//     if(err)return console.error(err);
//     console.log(results);
// });

//for(let i=0;i<60;i++){
	//a()
//}


function a(){


	//  let url = 'https://link.zhihu.com/?target=http%3A//translate.google.cn/translate_a/single%3Fclient%3Dat%26sl%3Den%26tl%3Dzh-CN%26dt%3Dt%26q%3Dgoogle'
	// request.get({"url":url, form: {}}, function(err,httpResponse,body){ 
	// 	console.log(httpResponse.body)


	// })


}
arr=["Pixie_DidYouStealTheFiles.eng.mtf"]
for(let i=0;i<arr.length-1;i++){
	arr[i]="E:\\translation\\English\\"+arr[i]
		fs.readFile(arr[i], function (err, data) {
				let bin_arr=arr[i].split("\\")
				bin_arr[bin_arr.length-3]+="\\bin"
				let bin=bin_arr[0]
				for(let i=1;i<bin_arr.length;i++){

					bin+="\\"+bin_arr[i]
				
				}
			   let be=data.toString().split("\n");  
			   let list="";
				for(let k=0;k<be.length;k++){
				  	be[k]=be[k].split("=>");
					 tjs.translate({ api: 'GoogleCN', text: be[k][1].substring(2,be[k][1].length-1) }).then(function (resultObj) {
					    //console.log(resultObj.result)
					    be[k][1]=resultObj.result
					    num1++
					    if(num1==215){
						    for(let j=0;j<be.length;j++){
						    	list+=be[j][0]+"=> "
						    	list+="\""+be[j][1]+"\"\n"
						    }	
						   //console.log(list)
						   fs.writeFile(bin, list,  function(err) {});
					    }
					    //num1++
					   console.log(num1)
						
						

					  }, function (errMsg) {
					    console.log(errMsg)
					  })
				}
		})
}











// 异步遍历目录下的所有文件
rd.eachSync('./English', function (f, s) {
  // 每找到一个文件都会调用一次此函数
  // 参数s是通过 fs.stat() 获取到的文件属性值
  let mtf=f.split(".")

  if(mtf.indexOf("mtf")!=-1){
  //f="E:\\translation\\English\\Hank_FirstLecture.eng.mtf"
		//console.log(beList)
	  	fs.readFile(f, function (err, data) {
				let bin_arr=f.split("\\")
				bin_arr[bin_arr.length-3]+="\\bin"
				let bin=bin_arr[0]
				for(let i=1;i<bin_arr.length;i++){

					bin+="\\"+bin_arr[i]
				
				}
				//bin path
			   let be=data.toString().split("\n");  
			   let list="";
			   let transTextList=""
				for(let i=0;i<be.length;i++){
				  	be[i]=be[i].split("=>");
					let text =be[i][1];
					if(text)
						transTextList+=text.substring(2,text.length-1)+"\n";
					



					// translate.transText(transText,{from: 'en', to: 'zh-CN'}).then(function(result){
					// 	be[i][1]=+"\""+result.text+"\"\n"
					// 	list+=be[i][0]+" => "
					// 	let str=be[i][1]
					// 	be[i][1]="\""+str.substring(3,str.length-1);
				
					// 	list+=be[i][1]+"\n"
					// 	//console.log(list)



					// 	//fs.writeFile(bin, list,  function(err) {});
					// });


				} 	
				  tjs.translate({ api: 'GoogleCN', text: transTextList }).then(function (resultObj) {
				    //console.log(resultObj.result)
				    let right_arr=resultObj.result

				    for(let i=0;i<be.length;i++){
				    	list+=be[i][0]+"=> "
				    	right_arr[i]=right_arr[i].substring(0,right_arr[i].length-1)
				    	list+="\""+right_arr[i]+"\"\n"
				    }
					fs.writeFile(bin, list,  function(err) {});
					
					console.log(list)
				  }, function (errMsg) {
				    console.log(errMsg)
				  })
					// translate.transText(transTextList,{from: 'en', to: 'zh-CN'}).then(function(result){
					// 	//
					// 	let right_arr=result.text.split("\n")
					// 	for(let i=0;i<be.length;i++){
					// 		list+=be[i][0]+"=> "
					// 		let str="\""+right_arr[i]+"\"\n"
					// 		right_arr[i]="\""+str.substring(3,str.length-1)
					// 		list+=right_arr[i]+"\n"
					// 	}
					// 	//console.log(list)
					// 	// be[i][1]=+"\""+result.text+"\"\n"
					// 	// list+=be[i][0]+" => "
					// 	// let str=be[i][1]
					// 	// be[i][1]="\""+str.substring(3,str.length-1);
					// 	// list+=be[i][1]+"\n"

					// 	// fs.open(bin,"w",0644,function(e,fd){
					// 	//     if(e) {console.log(e);return};
					// 	//     fs.write(fd,list,0,'utf8',function(e){
					// 	//         if(e) {console.log(e);return};
					// 	//         fs.closeSync(fd);
					// 	//     })
					// 	// });
					// 	//fs.writeFile(bin, list,  function(err) {});
					// //console.log(num1)
					//  });

				
				 //fs.writeFile(f, list,  function(err) {});


		   if (err) {
		       return console.error(err);
		   }
		});






	}

});



// 同步遍历目录下的所有js文件
// rd.eachFileFilter('./English', /\.mtf$/, function (f, s) {
//   console.log(f);
// });







// for()
// {
// 	let transText = 'I love u';
// 	translate.transText(transText,{from: 'en', to: 'zh-CN'}).then(function(result){
// 	      console.log(transText)
// 	      console.log(result.text)
// 	});
// }
// 	