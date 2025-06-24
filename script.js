const clearButton = document.getElementById('clear');
        const data1Input = document.getElementById('data1');
        const data2Input = document.getElementById('data2');
        const calendario = document.querySelectorAll('.calendar td');
        const diasEntreDisplay = document.getElementById('diasEntre');

        
        function clearHighlights(){
          calendario.forEach(cell => cell.style.backgroundColor = '');
        }
        
        function highlightDates(){
          clearHighlights(); 
          
          const data1 = new Date(data1Input.value + 'T00:00:00'); 
          const data2 = new Date(data2Input.value + 'T00:00:00');
          const dia1 = data1.getDate();
          const dia2 = data2.getDate();

          const DiferencaTempo = Math.abs(data2 - data1);
          
          const diasEntre = Math.ceil(DiferencaTempo / (1000 * 60 * 60 * 24));
          
          diasEntreDisplay.textContent = `Dias entre as datas: ${diasEntre}`;
          
          calendario.forEach(cell => {
            const cellDay = parseInt(cell.textContent);
            
            if (cellDay === dia1 || cellDay === dia2){
              cell.style.backgroundColor = '#0dfe2e';
              
            } else if (cellDay > dia1 && cellDay < dia2){
              cell.style.backgroundColor = '#01b96e';
            }
          });
        }
        
        clearButton.addEventListener('click', clearHighlights); 
        data1Input.addEventListener('change', highlightDates);
        data2Input.addEventListener('change', highlightDates);