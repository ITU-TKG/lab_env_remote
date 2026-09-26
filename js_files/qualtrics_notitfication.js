Qualtrics.SurveyEngine.addOnload(function()
{
	/*ページが読み込まれたときに実行するJavaScriptをここに配置してください*/
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	loadScript(
        "https://lab-vercel-upload.vercel.app/LoadMessageFunc.js"
    ).then(function () {

        // node.jsサーバーのurl
		var serverUrl = "https://lab-vercel-upload.vercel.app/messages.json";
		//テキストタイプ変更点 ("positive" / "neutral" / "negative" から選択)
        var messageGroup = "positive";
        loadMessagesFromServer(serverUrl, messageGroup);

    }).catch(function (e) {

        console.error(e);

    });

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*ページの読み込みが解除されたときに実行するJavaScriptをここに配置してください*/
});

function loadScript(url) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement("script");
        script.src = url;
        script.onload = function () {
            console.log("外部js 読み込み完了");
            resolve();
        };
        script.onerror = function () {
            reject(new Error("外部js を読み込めません"));
        };
        document.head.appendChild(script);
    });
}