<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=UpdateDescription%>
/// </summary>
/// <returns></returns>
[HttpPost]
[Route("<%=UpdateControllerFunctionName%>")]
[Authorize]
public Result <%=UpdateControllerFunctionName%>([FromBody] <%=UpdateParamsModelName%> pars)
{
  using (var uniOfWork = new UnitOfWork(_conStr))
  {
    <%=TableName%>Service service = new <%=TableName%>Service(uniOfWork);
    service.<%=UpdateServiceFunctionName%>(pars);
  }
  return Sucess("sucess");
}
