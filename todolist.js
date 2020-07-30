                var numberOfListItems=0;
                var totalItems=document.getElementById('totalItems');
                totalItems.textContent='You have '+numberOfListItems+ ' activities on your to do list';

            function addActivityToList(e){
                

                var list=document.getElementsByTagName('ul')[0];// set the parent element to add list items
                var listItem=document.createElement('li');
                var textValue=document.getElementById('Activity').value;// get the value of the form text input
                var textItem=document.createTextNode(textValue);


                if (textValue===''){
                    e.preventDefault();
                    alert('Please type an activity in the text box');
                }else{

                listItem.appendChild(textItem);
               list.appendChild(listItem);
               //list.insertBefore(listItem, list.firstChild);
               
               // get all list items from NodeList
               numberOfListItems=document.querySelectorAll('li').length;
               console.log(numberOfListItems);

               var totalItems=document.getElementById('totalItems');
               totalItems.textContent='You have '+numberOfListItems+ ' activities on your to do list';

            }
            }

            var addActivity=document.getElementById('addActivity');
            addActivity.addEventListener('click', function(e){addActivityToList(e);});