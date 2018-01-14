<template>
<section>
  <div>
    <nav>
      <div class="menu">
        <img class="menu-hamburguer" src="../assets/hamburguer.svg">        
        <img class="menu-logo" src="../assets/logo.svg"> 
        <img class="menu-lupa-busca" src="../assets/Lupa-busca.svg"> 
      </div>  
    </nav>
  </div>
  <div class="Mae">
    <div class="sub-titulo">
      <h1 class="sub-titulo-h1">De tanto ganhar meias no Natal, tio-avô ganha livro e tenta calçá-lo</h1>
    </div>
    <div class="cacarlivros">
      <img class="cacarlivros-img" src="../assets/cacarlivros.jpg">
    </div>
    <div class="text-prosa">
      <p class="text-prosa-p">Foi uma cena estranha no Natal antecipado da família Siqueira, na zona norte do Rio de Janeiro. Bem mais estranha do que a Tia Julinha perguntando à sobrinha Cássia pela 76a vez quando ela ia se casar. Ou o cunhado Valcir tentando entoar Então é Natal, da Simone. Eram quase onze da noite quando o tio-avô Onofre, de 77 anos, ganhou seu presente. Abriu e era um um livro, a biografia de Jô Soares, que sua irmã Olga comprara com ótimo preço na Saraiva. Onofre olhou, olhou e olhou o livro por muitos minutos. Os parentes imaginaram que ele estava emocionado. De repente Onofre se sentou, tirou seu sapato e colocou o livro perto do pé. A família demorou a entender: ele estava tentando calçar o livro. Resultado das meias que ganhou nos últimos 17 anos.</p>
    </div>
    <div class="comentaros">
      <h3 class="comentarios-h3">Comentáros</h3>
    </div>
    <div class="comentarios-linha"></div>

    <div id="app">
    <div>
    </div>
    <div>
      <ul v-for="recado in usuario.recados">
        <li>{{recado}}</li>
      </ul>
      <label>
        <span>Digite um comentario:</span>
        <input class="caixa-comentario" v-model="recado" v-on:keyup.enter="addRecado">
      </label>
    </div>
  
    </div>


  </div>
</section>
</template>

<script>
export default {
    name: 'recados',
    data () {
      return {
        recado: '',
        usuario: {
          recados: ['']
        }
      }
    },
    methods: {
      addRecado(recado) {
        return this.usuario.recados.push(this.recado),
             this.recado = ''
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu{
    background: black;
    height: 11vh;
    width: 100vw;
  }
  .menu-hamburguer{
    height: 21px;
    padding: 0 20px 14px 14px;
  }
  .menu-logo{
    height: 8vh;
    padding: 10px 0 0 54px;
  }
  .menu-lupa-busca{
    height: 27px;
    padding: 0 0 10px 45px;
  }
  .Mae{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  .sub-titulo{
  }
  .sub-titulo-h1{
     width: 340px;
    display: flex;
    text-align: center; 
    color: black;
    font-size: 20px;
  }
  .cacarlivros-img{
    width: 100%;
    height: 42vh;
  }
  .text-prosa-p{
    width: 340px;
    height:100% ;
    color: black;
    font-size: 16px;
  }
  .comentarios-h3{
    display: flex;
    padding: 34px 224px 7px 0;
    color: black;
    margin: 0;
  }
  .comentarios-linha{
    width: 100%;
    height: 1px;
    background-color: black;
  }
  .caixa-comentario{
    border-radius: 50px;
    height: 20px;
    font-size: 15px;
    font-family: 'Playfair Display', serif;
    
    outline: 0;
  }
  

</style>
