const mysql = require("./config");

exports.usersInit = async()=>{
    try {
        await mysql.query("SELECT * FROM users");
    } catch (error) {
        await mysql.query("CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20), user_pw VARCHAR(128))")
    }
}

exports.userSelect = async(user_id)=>{
    console.log(user_id,'믿지안아');
    try {
        const [result] = await mysql.query("SELECT * FROM users WHERE user_id = ?", [user_id]);
        console.log("result",result)
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

exports.userInsert = async(user_id,user_pw)=>{
    try {
        // 일단 중복되는 아이디인지 확인을 먼저 하자
        const [user] = await mysql.query("SELECT * FROM users WHERE user_id = ?", [user_id])
        if(user.length != 0){
            // 이미 존재하는 아이디
            let err = new Error("중복 아이디임");
            console.log(err)
            return err;
        }

        // 중복되지 않았으면 회원가입 정상적으로
        await mysql.query("INSERT INTO users(user_id, user_pw)VALUES(?,?)",[user_id,user_pw]);
    } catch (error) {
        console.log(error);
    }
}