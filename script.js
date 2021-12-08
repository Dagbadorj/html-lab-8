
let xmlContent = '';
let tableBooks = document.getElementById('item');
fetch('news.xml').then((response)=> {
    response.text().then((xml)=>{
    xmlContent = xml;

    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
    let news = xmlDOM.querySelectorAll('item');

        news.forEach(bookXmlNode => {

            let row = document.getElementsByClassName('banner-sub-content');

            //heading
            let td = document.getElementsByClassName('hot-topic-content');
            td.innerText = bookXmlNode.children[0].innerHTML;
            row.appendChild(td);

            //  title
            td = document.getElementsByClassName('hot-topic-content');
            td.innerText = bookXmlNode.children[1].innerHTML;
            row.appendChild(td);
                            
            //price
            td = document.getElementsByClassName('hot-topic-content');
            td.innerText = '$ ' + bookXmlNode.children[3].innerHTML;
            row.appendChild(td);

            //description
            td = document.getElementsByClassName('hot-topic-content');
            td.innerText = bookXmlNode.children[5].innerHTML;
            row.appendChild(td);

            tableBooks.children[1].appendChild(row);
                        
        });
                
    });
});   