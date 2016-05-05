window.onresize = doLayout;

onload = function() {
  doLayout();
  // Handles newwindow event.
  // https://developer.chrome.com/apps/tags/webview#event-newwindow
  var webview = document.querySelector('webview');
  webview.addEventListener('newwindow', function(e) {
    window.open(e.targetUrl);
  });
};

function doLayout() {
  var webview = document.querySelector('webview');
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var webviewWidth = windowWidth;
  var webviewHeight = windowHeight;
  webview.style.width = webviewWidth + 'px';
  webview.style.height = webviewHeight + 'px';
}