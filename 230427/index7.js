// 웹 서버 만들어보자
// 내장 모듈 가져오자
const http = require("http");

// createServer 메소드는 서버 객체를 만들어주고
// 클라이언트의 요청을 받으면 호출이 된다.
// 전달된 콜백 함수는 클라이언트의 요청을 받아서 처리 후
// 클라이언트에 응답해준다.

const server = http.createServer((req, res) => {
    //처리를 다 하고 응답하는 end 메소드 (해당 내용을 응답한 후 종료)
    // 차후에 헤더 내용으로 인코딩을 utf-8을 추가해서 한글이 깨지지 않도록 할 것

    res.end("server on");
});

// 포트
// 3000번 포트 같은 포트를 지정하는 이유
// 네트워크 프로세스를 나눠주기 위해서
// http 80, https 433번 포트를 사용한다.
// 시스템 예약 포트 이외의 사용하지 않을 것 같은 포트들을 사용하면 된다.
// 1024번까지 사용을 하므로
// 1025 ~ 65535까지 안에서 사용해야한다.
// 개발할 때 일반적으로 8000, 8080, 3000 이런 포트들을 많이 사용한다.

const PORT = 4000;
// 여기 까지 작성하고 실행시키면 바로 실행 끝나자마자 종료된다.

// 서버 객체의 listen 메소드를 호출해서
// 클라이언트의 요청을 대기상태로 만들어줄 수 있다.
// 이벤트 루프를 돌면서 요청이 오기까지 대기를 하다가
// 요청이 오면 응답해준다.
// listen메소드에 매개변수로 첫 번째 매개변수로 port를 전달
server.listen(PORT,()=>{
    // 콜백 함수를 등록해서
    // 성공적으로 서버가 열린것인지 확인 가능하다.
    console.log("서버가 잘 열려있어요." + PORT + "에");
});