<%@ page language="java" contentType="text/html; charset=EUC-KR"%>
<%
    request.setCharacterEncoding("EUC-KR");
%>
<jsp:useBean id="mgr" class="ch14.MemberMgr" />
<!-- 회원가입을 위한 insertMember()메소드를 사용위해 객체 생성 -->
<jsp:useBean id="bean" class="ch14.MemberBean" />
<!-- 유즈빈을 사용하여 자바빈을 사용 -->
<jsp:setProperty property="*" name="bean" />
<!-- 자바빈 객체의 프로퍼티값 변경 -->
<%
    boolean result = mgr.insertMember(bean);
    String msg = "회원가입에 실패 하였습니다.";
    String location = "member.jsp";
    if (result) {
        msg = "회원가입을 하였습니다.";
        location = "login.jsp";
    }
%>
<script>
    alert("<%=msg%>");
    location.href = "<%=location%>
    ";
</script>
