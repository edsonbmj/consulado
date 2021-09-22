function verificar(){
      var a = document.querySelector('input#país')
      var b = document.querySelector('div#res')
      if (a.value === 'Brasileiro' || a.value == 'BRASILEIRO' || a.value =='brasileiro' || a.value == 'brasil' || a.value == 'BRASIL' || a.value == 'Brasil' || a.value == 'br' || a.value =='BR' || a.value =='Br' || a.value =='bRASILEIRO' || a.value =='bR'){
      res.innerHTML = `Seja bem vindo(a) de volta ao seu país natal!`;
      } else if (a.value == ''){
        window.alert(`Campo obrigatório. Favor preenchê-lo!`)
      }else{
      b.innerHTML = `Seja bem vindo(a), estrangeiro(a)! Tenha uma ótima experiência em nosso país.`;
      }
    }    
