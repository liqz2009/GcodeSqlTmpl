<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=GetOneDescription%>
/// </summary>
/// <returns></returns>
[HttpPost]
[Route("<%=GetOneControllerFunctionName%>")]
[Authorize]
public Result <%=GetOneControllerFunctionName%>([FromBody] <%=GetOneParamsModelName%> pars)
{
  using (var uniOfWork = new UnitOfWork(_conStr))
  {
    <%=TableName%>Service service = new <%=TableName%>Service(uniOfWork);
    var obj= service.<%=GetOneServiceFunctionName%>(pars);
    return Sucess(obj);
  }
}
