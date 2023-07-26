let detalis=[
    {
     id:1,
     name:"flowes",
     image:"images/i-4.jpg",
     title:"Bus",
     conent:"Bus ravel content strives to produce consistent communication materials (blog posts, images, videos, etc ) that customers will find helpful while crawling through ...",
    },
    {
        id:2,
        name:"flowes",
        image:"images/i-6.jpg",
        title:"Boat House",
        conent:"Boat ravel content strives to produce consistent communication materials (blog posts, images, videos, etc ) that customers will find helpful while crawling through ...",
       },
       {
        id:3,
        name:"flowes",
        image:"images/i-3.jpg",
        title:"Van",
        conent:"Van ravel content strives to produce consistent communication materials (blog posts, images, videos, etc ) that customers will find helpful while crawling through ...",
       },
       {
        id:4,
        name:"flowes",
        image:"images/i-1.jpg",
        title:"Bike",
        conent:"Kera; ravel content strives to produce consistent communication materials (blog posts, images, videos, etc ) that customers will find helpful while crawling through ... racing",
       },
       {
        id:5,
        name:"flowes",
        image:"images/i-5.jpg",
        title:"Truck",
        conent:"Truck ravel content strives to produce consistent communication materials (blog posts, images, videos, etc ) that customers will find helpful while crawling through ...",
       },
       {
        id:6,
        name:"flowes",
        image:"images/i-2.jpg",
        title:"Car",
        conent:"Boat ravel content strives to produce consistent communication materials (blog posts, images, videos, etc ) that customers will find helpful while crawling through ...",
       },
]
console.log(detalis);

          var sec=document.getElementsByClassName("cardsection");
          console.log(sec);
         var cardConatiner=document.createElement("div");
             cardConatiner.classList.add("card-conatiner");
             sec[0].appendChild(cardConatiner);


             var cardtitle=document.createElement("h1");
             cardtitle.classList.add("card-title-head");
             cardtitle.innerHTML="Card Section";
             cardConatiner.appendChild(cardtitle);
        
         var row=document.createElement("div");
             row.classList.add("cards-row");
             cardConatiner.appendChild(row);

         detalis.forEach(function(e){
            var cardCol=document.createElement("div");
              cardCol.classList.add("card-col");
             row.appendChild(cardCol);

             var cardCard=document.createElement("div");
             cardCard.classList.add("card-card");
             cardCol.appendChild(cardCard);

             var picture=document.createElement("img");
             cardCard.appendChild(picture);
             picture.setAttribute("src",e.image);
             
             var heading=document.createElement("h2");
             heading.classList.add("card-heading");
             cardCard.appendChild(heading);
             heading.innerHTML=e.title;

             var para=document.createElement("p");
             para.classList.add("card-para");
             cardCard.appendChild(para);
             para.innerHTML=e.conent;
             
         }
         )
            
        