<template>
    <div>
      <header>  </header>
      <section role="main">
        <div class="menu" role="menu">  </div>
        <div class="commodity-content">
          <ul class="commodity-list" role="list">
            <li v-for="(item,key) in commodityList" :key="key" class="commodity-item">
              <span>
                <img :src="item.img" alt="" @click="imgClick"/>
              </span>
              <div class="commodity-item-content">
                <div data-type="section">
                  <h3> {{item.name}} </h3>
                  <p> 月售{{243}}份 &nbsp;&nbsp;&nbsp; 好评率93% </p>
                </div>
                <div data-type="footer">
                  <strong data-type="price" class="commodity-price">
                    1
                  </strong>
                  <span class="cartbutton-entitybutton_2u6UF">
                    <a href="javascript:" role="button" aria-label="删减商品" @click="decreaseCommodity">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add">
                          <svg viewBox="0 0 44 44" id="cart-add" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
                        </use>
                      </svg>
                    </a>
                    <span role="button" aria-label="已选92份" class="cartbutton-entityquantity_1LX01"> {{item.commodityQuantity}} </span>
                    <a href="javascript:" role="button" aria-label="添加商品" @click="(event)=>{addCommodity(item,event)}">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink"xlink:href="#cart-minus">
                          <svg viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
                        </use>
                      </svg>
                     </a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div class="bottomNav-cartfooter_1qvQh_0" style="z-index: 11;">
        <span role="button" ref="shoppingCart" aria-label="购物车"
              :attr-quantity="totalQuantity"
              class="bottomNav-carticon_2xfrl_0"></span>
        <div role="button" aria-label="购物车有商品93件，共104.3元，配送费&amp;yen;3。" class="bottomNav-cartInfo_135aa_0"><p
          class="bottomNav-carttotal_1nOFY_0"><span>¥104.3</span> <!----></p>
          <p class="bottomNav-cartdelivery_Gsj2c_0">配送费¥3</p></div>
        <a role="button" href="javascript:;" class="submit-btn-submitbutton_1dW2t_0"><span>去结算</span></a>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Shopping from '@/components/shopping'

  const ShoppingConstructor = Vue.extend(Shopping)

  export default {
    data () {
      return {
        t:[1,2,3,4],
        flyBallStyle:{left:0,top:0,transition:'.5s transform linear'},
        innerStyle:{width:'16px',height:'16px'},
        queue:[],
        commodityList: [
          {
            name: '金针菇',
            img: 'https://fuss10.elemecdn.com/5/8b/48cfcc3314553d873cc134eb47ccdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0,
          }, {
            name: '土豆片',
            img: 'https://fuss10.elemecdn.com/8/67/23e5758d77ecc60780da5f01f5940jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0
          }, {
            name: '鱼豆腐',
            img: 'https://fuss10.elemecdn.com/f/88/862b59d691fcc0644cc5e33a07034jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140//',
            price: 3,
            commodityQuantity: 0
          }, {
            name: '方便面',
            img: 'https://fuss10.elemecdn.com/a/0d/1b149a6b2d83d3fa092800247eebajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0
          }, {
            name: '金针菇',
            img: 'https://fuss10.elemecdn.com/5/8b/48cfcc3314553d873cc134eb47ccdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0
          }, {
            name: '金针菇',
            img: 'https://fuss10.elemecdn.com/5/8b/48cfcc3314553d873cc134eb47ccdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0
          }, {
            name: '金针菇',
            img: 'https://fuss10.elemecdn.com/5/8b/48cfcc3314553d873cc134eb47ccdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0
          }, {
            name: '金针菇',
            img: 'https://fuss10.elemecdn.com/5/8b/48cfcc3314553d873cc134eb47ccdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0
          }, {
            name: '金针菇',
            img: 'https://fuss10.elemecdn.com/5/8b/48cfcc3314553d873cc134eb47ccdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            price: 3,
            commodityQuantity: 0
          }
        ]
      }
    },
    watch:{
      commodityList(pre,cur){
        console.log(pre,cur);
      }
    },
    computed:{
      totalQuantity(){
        let total = 0;
        for (let i = 0; i < this.commodityList.length; i++) {
          let commodity = this.commodityList[i];
          total += commodity.commodityQuantity
        }
        return total
      }
    },
    methods:{
      imgClick(){
        this.t.pop();
      },
      decreaseCommodity(){},
      getShoppingCartPos(){
        let {top,left,width,bottom} = this.$refs.shoppingCart.getBoundingClientRect();
        left = left + width/2;
        top = top + width/2
        return {top,left}
      },
      addCommodity(item,event){
        const {top,left} = event.currentTarget.getBoundingClientRect();
        const cw = document.documentElement.clientWidth;
        const shopPos = this.getShoppingCartPos();
        const instance = this.getInstance();
        const handleLeftPost = (cw - left) - 10,   //
              handleTopPost = top + 10;
        const flyBallStyle = {left:`${left}px`,top:`${top}px`},
              innerBallStyle = {width:'20px',height:'20px'}

        item.commodityQuantity += 1;

        this.$nextTick(()=>{
          instance.$el.addEventListener('transitionend',this.remove)
          clearTimeout(instance.timer);
          instance.flyBallStyle = flyBallStyle;
          instance.innerStyle = innerBallStyle;
          document.body.appendChild(instance.$el)

          setTimeout(()=>{
            flyBallStyle.transform = `translate3d(-${cw - shopPos.left - handleLeftPost}px,0px,0px)`
            innerBallStyle.transform = `translate3d(0px,${shopPos.top - handleTopPost}px,0px)`
            instance.flyBallStyle = {...flyBallStyle};
            instance.innerStyle = {...innerBallStyle};

            instance.timer = setTimeout(()=>{
              instance.$el.removeEventListener('transitionend', this.remove)
              this.queue.push(instance)
            },parseFloat(getComputedStyle(instance.$el)['transition-duration'],10) * 1000 + 100 || 500)

          },50)
        })
      },
      getInstance(){
        if (this.queue.length > 0) {
            return this.queue.pop();
        }
        return new ShoppingConstructor({el:document.createElement('div')})
      },
      remove(event){
        if (event.target.parentNode) {
          event.target.parentNode.removeChild(event.target);
        }
      },
      addShoppingAnm(event,instance){
        instance.flyBallStyle = style;

      }
    }
  }
</script>

<style>
  .flyball{
    position: fixed;
    transition: .5s transform linear;
  }
  .inner-ball{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3190e8;
    border-radius: 50%;
    z-index: 10000;
    will-change: transform;
    transition: transform .5s cubic-bezier(.3,-.2,1,0),-webkit-transform .5s cubic-bezier(.3,-.2,.86,0);
  }

  .commodity-item{
    padding: 10px 20px;
    display: flex;
    background: #fff;
    >span{
       width: 20.266667vw;
       height:20.266667vw;
        margin-right: 20px;
    }
  }
  .commodity-item-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    div[data-type="section"]{
      >h3{
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.2;
        overflow: hidden;
      }
      > span{
          color: #666;
          font-size: .293333rem;
      }
    }
    div[data-type="footer"]{
      display: flex;
      justify-content: space-between;
    }
  }

  .commodity-price{
    color: #f60;
    font-size: .426667rem;
    font-weight: 700;
  }

  .cartbutton-entitybutton_2u6UF{
    svg{
      width: 20px;
      height: 20px;
    }
  }

  .cartbutton-entityquantity_1LX01{
    vertical-align: top;
    line-height: 20px;
    display: inline-block;
  }

  .cartbutton-entitybutton_2u6UF svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    fill: #2395ff;
  }

  [data-dpr="2"] .cartbutton-entitybutton_2u6UF svg {
    width: 40px;
    height: 40px;
  }

  .bottomNav-cartfooter_1qvQh_0 {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 2.106667rem;
    padding-left: 21.066667vw;
    background-color: rgba(61,61,63,.9);
    -webkit-backdrop-filter: blur(.266667rem);
    -webkit-backdrop-filter: blur(2.666667vw);
    height: 1.28rem;
    height: 12.8vw;
  }
  .bottomNav-carticon_2xfrl_0 {
    position: absolute;
    left: .32rem;
    left: 3.2vw;
    bottom: .2rem;
    bottom: 2vw;
    width: 1.333333rem;
    width: 13.333333vw;
    height: 1.333333rem;
    height: 13.333333vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    border: .133333rem solid #444;
    border: 1.333333vw solid #444;
    -webkit-box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
    will-change: transform;
  }
  .bottomNav-cartInfo_135aa_0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .submit-btn-submitbutton_1dW2t_0 {
    height: 100%;
    width: 2.8rem;
    width: 28vw;
    background-color: #4cd964;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .4rem;
    font-weight: 700;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1.28rem;
    line-height: 12.8vw;
  }
  .bottomNav-carticon_2xfrl_0 {
    position: absolute;
    left: .32rem;
    left: 3.2vw;
    bottom: .2rem;
    bottom: 2vw;
    width: 1.333333rem;
    width: 13.333333vw;
    height: 1.333333rem;
    height: 13.333333vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    border: .133333rem solid #444;
    border: 1.333333vw solid #444;
    -webkit-box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
    will-change: transform;
  }

  .bottomNav-carticon_2xfrl_0:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50% no-repeat;
    background-size: .6rem;
    background-size: 6vw;
    content: "";
  }

  .bottomNav-carticon_2xfrl_0:after {
    position: absolute;
    right: -.12rem;
    right: -1.2vw;
    top: -.133333rem;
    top: -1.333333vw;
    line-height: 1;
    background-image: -webkit-gradient(linear,right top,left top,from(#ff7416),color-stop(98%,#ff3c15));
    background-image: -webkit-linear-gradient(right,#ff7416,#ff3c15 98%);
    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    color: #fff;
    border-radius: .32rem;
    border-radius: 3.2vw;
    padding: .053333rem .133333rem;
    padding: .533333vw 1.333333vw;
    content: attr(attr-quantity);
    font-size: .266667rem;
  }

</style>
