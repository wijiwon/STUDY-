// 시퀄라이즈 ORM(객체 관계 맵핑)
// 객체와 데이터베이스를 ORM 라이브러리가 매핑을 시켜주어서 자바스크립트 구문으로 sql을 제어할 수 있다.
// 자바스크립트로만 sql 작업을 할 수 있도록 도와주는 라이브러리

// 프로젝트 시작 package.json
// 설치할 모듈 express ejs sequelize mysql2 dotenv
// 서버 객체 만들고 서버 대기상태
// view엔진 경로설정
// view 엔진 ejs 사용
// body 객체 사용

const express = require("express");
const path = require("path");
const dot = require('dotenv').config();
// const dot = require('dotenv').config({ path: '/230519/.env' });

const { Sequelize, User, Post } = require("./models");

const app = express();

app.set("views", path.join(__dirname,"page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));


// 시퀄라이즈 구성 연결 매핑
// sync 함수는 데이터 베이스를 동기화 시켜주는 메소드

// focus - true: 초기화
// focus - false: 초기화 안함
Sequelize.sync({focus : true}).then(()=>{
    // 연결성공
}).catch((err)=>{
    // 연결실패
    console.log(err);
})

app.get('/',(req,res)=>{
    res.render("create")
})

app.post('/create',(req,res)=>{
    const { name, age, msg } = req.body;
    // create메소드: insert 문을 실행시켜주는 메서드
    // 매개변수로 컬럼의 내용을 객체로 만들어서 전달
    User.create({
        // name 컬럼의 값
        name : name,
        // age 컬럼의 값
        age : age,
        // msg 컬럼의 값
        msg : msg
    })
    res.send("값 추가 완료")
})

app.get('/main',(req,res)=>{
    // 유저 전체 조회
    // findAll메소드: 매개변수로 검색 조건을 객체로 추가할 수 있다.
    // 지금은 전체조회를 할 것이기 때문에 조건을 넣지 않는다.

    // SELECT * FROM User 한거랑 같구나
    User.findAll({})
    .then((e)=>{
        // 성공 시
        res.render("main", { data : e });
    })
    .catch((e)=>{
        // 실패 시
        res.send("유저 조회 실패")
    })
})

app.post('/create_post', (req,res)=>{
    const { name, value } = req.body;
    console.log("name, value",name, value);
    // findOne: 한 개의 값을 조회하는 메소드
    User.findOne({
        // 검색 조건 추가
        where : {name: name}
    }).then((e)=>{
        Post.create({
            msg : value,
            userId : e.id
        })
    })
    res.send();
})

app.get('/view/:name',(req,res)=>{
    // 유저를 조회하고 가지고 있는 글을 볼거임!
    User.findOne({
        where : { 
            // 해당 이름의 유저를 조회하면서
            name : req.params.name 
        },
        // raw 속성을 주면 관계형으로 불러온 값을 다 풀어서 볼 수가 있는데
        // raw: true,
        // 해당 유저의 id로 참조된 user_id가 있는 post 테이블의 값을 같이 조회한다.
        include : [
            // 조회할 모듈 = Post모델
            {model : Post}
        ]
    }).then((e)=>{
        console.log(e);
        e.dataValues.Posts = e.dataValues.Posts.map((i)=> {return i.dataValues});
        const Posts = e.dataValues;
        console.log(Posts);
        res.render("view", {data : Posts});
    })
})


app.listen(6767,()=>{
    console.log("서버열림");
})