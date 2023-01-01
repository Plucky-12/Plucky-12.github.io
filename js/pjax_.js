function hot_search(){
    axios.get('https://v1.hitokoto.cn/')
        .then(function (response) {
            // console.log(response);
            var hitokoto = response.data.hitokoto;
            console.log(hitokoto);

            var element = document.querySelector('#article-container > div:nth-child(2) > strong');
            element.innerHTML = hitokoto;
        });

}





window.onload = function(){
    axios.get('https://v1.hitokoto.cn/')
        .then(function (response) {
            // console.log(response);
            var hitokoto = response.data.hitokoto;
            // console.log(hitokoto);
            var element = document.querySelector('#aside-content > div.card-widget.card-info > div:nth-child(1) > div.author-info__description');
            element.innerHTML = hitokoto;
        });
}