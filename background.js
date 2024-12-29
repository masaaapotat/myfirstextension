// console.log('i am the background');
// console.log(this)


chrome.runtime.onInstalled.addListener(()=>{
    chrome.tabs.create({url:"https://chatgpt.com"})
})