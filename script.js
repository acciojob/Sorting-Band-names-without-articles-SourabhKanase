let arr = ['the Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let regex=/\bthe\b|\ba\b\ban\b/gi;
let ans=[];
let obj={};
for(let i=0;i<arr.length;i++)
{
	let without=arr[i].replace(regex,"").trim();
	ans.push(without);
    obj[without]=arr[i];
}
// console.log(obj);
ans.sort();
let final=[];
for(let i=0;i<arr.length;i++)
{
  let x=obj[ans[i]];
  final[i]=x;
}
console.log(final);