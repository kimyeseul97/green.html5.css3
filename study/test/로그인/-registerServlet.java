import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
@WebServlet("/register")
public class registerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
 
        PrintWriter out = resp.getWriter();
 
        String id = req.getParameter("id");
        String pw = req.getParameter("pw");
 
        Cookie[] cookies = req.getCookies();
 
       
        //try catch를 쓴 이유 :
        //만약 현재 쿠키에 어떠한 값도 들어있지 않을경우 쿠키배열의 길이를 구하는 과정에 오류가 발생하게 되는데
        //그때 오류를 잡고 빈값인 쿠키배열의 길이가 아닌 시작 인덱스값인 0을 대신 대입해주기 위함
        int length;
        try {
            length = cookies.length;
        } catch(Exception e) {
            length = 0;
        }
       
        boolean check = true;
        // 이미 가입된 아이디인지 확인
        for (int i = 0; i < length; i++) { //만약 위의 try catch문이 없으면 여기서 오류 발생!
            //만약 입력받은 아이디와 쿠키에 저장된 아이디값이 같다면
            if (cookies[i].getName().equals(id)) {
                out.println("이미 가입된 아이디입니다. 이전 페이지로 돌아가 다른 아이디로 다시 시도해 주세요");
                check = false;
                break;
            }
        }
       
        //이미 가입된 아이디가 아니라면
        if(check) {
            Cookie c = new Cookie(id, pw);
            c.setMaxAge(60); //테스트용이므로 1분동안만 저장되게 설정
            resp.addCookie(c); //아이디와 비밀번호를 저장한 쿠키 객체 전송
            out.println("가입 완료!");
        }
    }
}