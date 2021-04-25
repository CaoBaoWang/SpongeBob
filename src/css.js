export default  `

/*准备海绵宝宝的肤色*/
.wrapper {
    background-color: #fff400;
    display: flex;
    justify-content: center;
}



/*准备海绵宝宝的眼睛*/
.eye {
    border: 5px solid black;
    border-radius: 50%;
    width: 190px;
    height: 190px;
    position: absolute;
    left: 50%;
    top: 100px;
    /*transform: translate(-50%);*/
    background: white;
}

.eye.left {
    transform: translate(-96%);
}
.eye.right {
    transform: translate(-4%);
}

/*准备海绵宝宝的瞳孔*/

.eye .eyeball {


    border:3px solid black;
    border-radius: 50%;
    width: 58px;
    height: 58px;
    position: absolute;
    top: 70px;
    background-color: #0093dc;
}
.eye.left .eyeball {
    position: absolute;
    right: 40px;
}
.eye.right .eyeball {
    left: 40px;
}

.eyeball::before {
    display: block;
    content: '';
    width: 28px;
    height: 28px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: black;
    border-radius: 50%;

}

/*准备海绵宝宝的眉毛*/

.eyelash {
    width: 100px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 72px;
    display: flex;
    justify-content: space-between;
}
.eyelash.left {
    transform: translate(-140%);
}

.eyelash.right {
    transform: translate(40%);
}
.eyelash div {
    width: 10px;
    height: 100%;
    background-color: black;
}
.eyelash1 , .eyelash4{
    transform: rotate(-.05turn) translatey(10px);
}
.eyelash3 , .eyelash6{
    transform: rotate(.05turn) translatey(10px);
}
/*准备海绵宝宝的鼻子*/

.nose {
    border: 5px solid black;
    width: 46px;
    height: 114px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 176px;
    border-radius: 50% / 54%;
    background-color: #fff400;
    border-bottom: none;

}
/*准备海绵宝宝的脸颊*/

.cheek {
    border: 4px solid #d9241c;
    border-top-width: 5px;
    border-bottom: 2px solid transparent;
    width: 86px;
    height: 54px;
    position: absolute;
    left: 50%;
    top: 246px;
    border-radius: 50%;
    background-color: #fff400;
    display: flex;

}
.cheek.left {
    transform: translate(-240%) rotate(-8deg);
}
.cheek.right {
    transform: translate(140%) rotate(8deg);
}
.cheek div{
    border: 1px solid red;
    width: 6px;
    height: 6px;
    border-radius:50%;
    background-color: #d9241c;
}

/*准备海绵宝宝的痘痘*/

.pimple1 {
    position: absolute;
    left: 30%;
    top: 35%;
}

.pimple2 {
    position: absolute;
    left: 60%;
    top: 35%;
}

.pimple3 {
    position: absolute;
    left: 45%;
    top: 65%;
}

.pimple4 {
    position: absolute;
    left: 30%;
    top: 35%;
}
.pimple5 {
    position: absolute;
    left: 60%;
    top: 35%;
}

.pimple6 {
    position: absolute;
    left: 45%;
    top: 65%;
}

/*准备海绵宝宝的嘴巴*/

.mouth {
    /*border:1px solid red;*/
    width: 400px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 290px;
    transform: translate(-50%);
}
/*准备海绵宝宝的嘴角*/
.corners {
    border : 1px solid transparent;
    border-top:5px solid black ;
    border-radius: 50%;
    width: 60px;
    height: 50px;
    position: absolute;

}
.corners.left{
    left: 10px;
    transform: rotate(-25deg);
}
.corners.right{
    right: 10px;
    transform: rotate(25deg);

}

/*准备海绵宝宝的嘴唇*/

.lip {
    width: 380px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translate(-50% );
    overflow: hidden;
}

.lip:before {
    content: '';
    display: block;
    border: 2px solid black;
    width: 100%;
    height: 200px;
    border-bottom: 5px solid black;
    border-radius: 50%;
    border-top: transparent;
    position: absolute;
    top: -128px;

}
/*准备海绵宝宝的牙齿*/

.tooth {
    width: 90px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 78px;
    transform: translate(-50%);
    display: flex;
    justify-content: space-between;

}
.tooth div {
    border: 5px solid black;
    height: 100%;
    width: 40px;
    background-color:white;
}
.tooth .left {
    transform: rotate(5deg);
}

.tooth .right {
    transform: rotate(-5deg);
}

/*准备海绵宝宝的下巴*/

.jaw {
    width:  200px;
    height: 80px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 430px;
    display: flex;
}

.jaw > div {
    border:2px solid transparent;
    flex-grow: 1;
    border-bottom: 8px solid #d9241c;
    border-radius: 50%;
    position: relative;
    top: -50px;

}
.jaw > .left {
    transform: rotate(12deg) translateX(11px);

}

.jaw > .right {
    transform: rotate(-12deg) translateX(-11px);
}

/*准备海绵宝宝身上的孔*/

.hole {
    border-radius: 50%;
    background-color: #d1c900;
    position: absolute;
    left: 50%;
}

.hole.n1 {
    width: 48px;
    height: 48px;
    transform: translate(-350px,100px);

}

.hole.n2 {
    width: 60px;
    height: 60px;
    transform: translate(200px, 40px);
}

.hole.n3 {
    width:  42px;
    height: 42px;
    transform: translate(240px,200px);

}

.hole.n4 {
    width:  48px;
    height: 48px;
    transform: translate(200px,340px);

}


.hole.n5 {
    width: 36px;
    height: 36px;
    transform: translate(-250px,330px);
}



.hole.n6 {
    width:  48px;
    height: 48px;
    transform: translate(-170px,460px);

}

.hole.n7 {
    width:  30px;
    height: 30px;
    transform: translate(130px,470px);

}

`
