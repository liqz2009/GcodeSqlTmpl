<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=InsertDescription%>
/// </summary>
/// <returns></returns>
[HttpPost]
[Route("<%=InsertControllerFunctionName%>")]
[Authorize]
public Result <%=InsertControllerFunctionName%>([FromBody] <%=InsertParamsModelName%> pars)
{
  using (var uniOfWork = new UnitOfWork(_conStr))
  {
    <%=TableName%>Service service = new <%=TableName%>Service(uniOfWork);
    service.<%=InsertServiceFunctionName%>(pars);
  }
  return Sucess("sucess");
}


