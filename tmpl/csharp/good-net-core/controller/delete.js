 <% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
///  <%=DeleteDescription%>
/// </summary>
/// <returns></returns>
[HttpPost]
[Route("<%=DeleteControllerFunctionName%>")]
[Authorize]
public Result <%=DeleteControllerFunctionName%>([FromBody] <%=DeleteParamsModelName%> pars)
{
  using (var uniOfWork = new UnitOfWork(_conStr))
  {
    <%=TableName%>Service service = new <%=TableName%>Service(uniOfWork);
    service.<%=DeleteServiceFunctionName%>(pars);
    return Sucess("sucess");
  }
}
