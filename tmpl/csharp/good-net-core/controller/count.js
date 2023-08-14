<% const now=new Date()%>
/// @author <%=Author%>
/// @since <%=now.toLocaleDateString();%> <%=now.toLocaleTimeString()%>
/// <summary>
/// <%=CountDescription%>
/// </summary>
/// <returns></returns>
[HttpPost]
[Route("<%=CountControllerFunctionName%>")]
[Authorize]
public Result <%=CountControllerFunctionName%>(<%if(CountSqlWhere){%> [FromBody] <%=CountParamsModelName%> pars <%}%>)
{

  using (var uniOfWork = new UnitOfWork(_conStr))
  {
    <%=TableName%>Service service = new <%=TableName%>Service(uniOfWork);
    var res=service.<%=CountServiceFunctionName%>(<%if(CountSqlWhere){%>pars<%}%>);
    return Sucess(res);
  }
}
