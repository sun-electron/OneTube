const webview = document.getElementById('YTvideoWV');
const back = document.getElementById('back');
const forward = document.getElementById('forward');
const reload = document.getElementById('reload');

//   URL 
const urlInput = document.getElementById('url-input');

webview.addEventListener('did-start-loading', () => {
  urlInput.value = webview.getURL();
});
urlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    webview.src = urlInput.value;
  }
});

urlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    let inputUrl = urlInput.value;
    if (!inputUrl.startsWith('https://www.youtube.com/') && !inputUrl.startsWith('https://www.youtube.com/')) {
      inputUrl = 'https://www.youtube.com/results?search_query=' + inputUrl;
    }
    webview.src = inputUrl;
  }
});


//   Baisc 

back.addEventListener('click', () => {
  webview.goBack();
});

forward.addEventListener('click', () => {
  webview.goForward();
});

reload.addEventListener('click', () => {
  webview.reload();
});