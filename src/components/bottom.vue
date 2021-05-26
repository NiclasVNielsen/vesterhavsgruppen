<template>
  <footer>
    <div class="stripes"/>
    <section class="wrapper">
      <div class="col4">
        ok
      </div>
      <div class="col3">
        fb
      </div>
      <div class="col2">
        <h6>
          Kontakt
        </h6>
        <p>
          DDS Vesterhavsgruppen <br>
          Bakkevej 14 <br>
          6700 Esbjerg <br>
          <br>
          Tlf. 40 29 26 71 <br>
          <br>
          kontakt@vesterhavsgruppen.dk
        </p>
      </div>
      <div class="col3">
        plante
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
  footer{
    background: var(--prim);
    color: var(--whiteshade1);
    .wrapper{
      margin-top: 39px;
      display: flex;
      font-family: proxima-nova,sans-serif;
      font-weight: 700;
      div{
        &:nth-of-type(3){
          font-size: 13px;
          p{
            font-weight: 400;
          }
        }
      }
    }
  }
</style>