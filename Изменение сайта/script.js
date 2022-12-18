let namelist2 = [];
let conflist = [];
let pricelist2 = [];
let imglist = [];
let hreflist1 = [];
let give_items = () => {
    //give namelist
    let namelist = document.querySelectorAll(".catalog-product__name");
    for (let i = 0; i < namelist.length; i++) {
        namelist2[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[0].split('//')[0];
        conflist[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[1].split(']')[0];
    }
    console.log(namelist2)
    console.log(conflist)
    //give price
    let pricelist = document.querySelectorAll(".product-buy__price");
     for (let i = 0; i < pricelist.length; i++) {
        pricelist2[i] = pricelist[i].innerHTML.split('<')[0];
    }
    console.log(pricelist2)
    let hreflist = document.querySelectorAll(".catalog-product ");
    for (let i = 0; i < hreflist.length; i++) {
        hreflist1[i] = hreflist[i].innerHTML.split('href="')[1].split('"')[0];
    }
    console.log(hreflist1);
    imglist = ['https://avatars.mds.yandex.net/i?id=079769f25b533a1db63df90d6fa95875-5251856-images-thumbs&n=13', 'https://i.pinimg.com/736x/7c/22/a3/7c22a3fd9effd18ba1810fca3206b88b.jpg', 'https://i.pinimg.com/736x/7a/98/ae/7a98aeaefb28ac2198bd7cf4c5ca5ce6.jpg'];
}
give_items();

let j = 0;
let upload_items = () => {
    let item = '<div style="display: flex; flex-wrap: wrap; flex-direction: row; padding: 20px; margin-bottom: 20px">';
    for (let i = 0; i < namelist2.length; i++) {
        item += '<div style="width: 31%; height: auto; border: 2px; padding: 15px; text-align: center; color: blue">'
        if (j == 0){item += '<img src="' + imglist[j] + '" style="margin: 5px; width: 70%; height: 60%; border-radius: 5px;"></img>'; j++;}
        else if (j == 1){item += '<img src="' + imglist[j] + '" style="margin: 5px; width: 70%; height: 60%; border-radius: 5px;"></img>'; j++;}
        else{item += '<img src="' + imglist[j] + '" style="margin: 5px; width: 70%; height: 60%; border-radius: 5px;"></img>'; j = 0;}
        item += '<br>' + '<b>' + namelist2[i] + '</b>';
        item += '<br>' + conflist[i];
        item += '<br>' + pricelist2[i];
        item += '<div class="row button"><a href="'+ hreflist1[i] + '"Выбрать"</a></div>';
        item += '</div>';
    }
    document.querySelector(".products-page ").innerHTML = item;
}
upload_items();