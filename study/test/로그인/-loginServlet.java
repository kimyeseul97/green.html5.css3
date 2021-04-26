import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
@WebServlet("/login")
public class loginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
       
        PrintWriter out = resp.getWriter();
       
        String id = req.getParameter("id");
        String pw = req.getParameter("pw");
        Cookie[] cookies = req.getCookies();
       
        //로그인 성공 여부 확인
        boolean check = true;
        // 쿠키에 저장된 값이 하나도 없으면 length를 이용한 배열의 길이를 구해올때 에러가 발생하게 되는데
        // 이 에러때문에 프로그램이 비정상적으로 중지되는 것을 방지하기 위해 try catch문 사용
        try {
        for (int i = 0; i < cookies.length; i++) {
            //만약 쿠키의 이름으로 저장된값(id값)이 입력받은 id값과 동일하다면
            if(cookies[i].getName().equals(id)) {
                //또한 그 id값에 해당하는 정확한 비밀번호를 입력했다면
                if(cookies[i].getValue().equals(pw)) {
                    out.println("로그인 성공!");
                    out.println(cookies[i].getName() + "님 환영합니다.");
                    check = false;
                    break;
                }
            }
        }
        } catch (Exception e) {
            out.println("쿠키에 저장된 아이디,비밀번호가 없습니다!");
            check = false;
        }
       
        //아이디 또는 비밀번호가 틀릴경우
        if(check) {
            out.println("아이디 혹은 비밀번호가 잘못 되었습니다.");
        }
    }
}